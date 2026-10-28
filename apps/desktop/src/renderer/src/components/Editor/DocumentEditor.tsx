import { useEffect, useRef } from 'react'
import { Schema, type Node as ProseMirrorNode } from 'prosemirror-model'
import { EditorState, type Command } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { schema as basicSchema } from 'prosemirror-schema-basic'
import { baseKeymap, toggleMark } from 'prosemirror-commands'
import { history, undo, redo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'

import type { DocumentModel, Paragraph, TextRun } from '@novawriter/document-model'

import './editor.css'

interface DocumentEditorProps {
  document: DocumentModel
  onDocumentChange: (document: DocumentModel) => void
}

// Extend the basic ProseMirror schema to support underline.
const editorSchema = new Schema({
  nodes: basicSchema.spec.nodes,

  marks: basicSchema.spec.marks.addToEnd('underline', {
    excludes: '',
    parseDOM: [{ tag: 'u' }, { style: 'text-decoration=underline' }],
    toDOM() {
      return ['u', 0]
    }
  })
})

const toggleBold: Command = toggleMark(editorSchema.marks.strong, {
  removeWhenEmpty: true
})

const toggleItalic: Command = toggleMark(editorSchema.marks.em, {
  removeWhenEmpty: true
})

const toggleUnderline: Command = toggleMark(editorSchema.marks.underline, {
  removeWhenEmpty: true
})

// Convert NovaWriter's DocumentModel into ProseMirror JSON.
function convertDocumentToProseMirror(model: DocumentModel) {
  return {
    type: 'doc',
    content: model.paragraphs.map((paragraph) => ({
      type: 'paragraph',
      content: paragraph.runs
        .filter((run) => run.text.length > 0)
        .map((run) => {
          const marks: Array<{ type: string }> = []

          if (run.bold) marks.push({ type: 'strong' })
          if (run.italic) marks.push({ type: 'em' })
          if (run.underline) marks.push({ type: 'underline' })

          return {
            type: 'text',
            text: run.text,
            ...(marks.length > 0 ? { marks } : {})
          }
        })
    }))
  }
}

// Convert the latest ProseMirror document back into NovaWriter's model.
function convertProseMirrorToDocumentModel(
  doc: ProseMirrorNode,
  previousModel: DocumentModel
): DocumentModel {
  const paragraphs: Paragraph[] = []

  doc.content.forEach((paragraphNode, paragraphIndex) => {
    if (paragraphNode.type.name !== 'paragraph') {
      return
    }

    const previousParagraph = previousModel.paragraphs[paragraphIndex]
    const runs: TextRun[] = []

    paragraphNode.content.forEach((child, runIndex) => {
      if (!child.isText || child.text === undefined || child.text.length === 0) {
        return
      }

      const markNames = new Set(child.marks.map((mark) => mark.type.name))

      const run: TextRun = {
        id: previousParagraph?.runs[runIndex]?.id ?? `p${paragraphIndex + 1}-r${runIndex + 1}`,
        text: child.text
      }

      if (markNames.has('strong')) run.bold = true
      if (markNames.has('em')) run.italic = true
      if (markNames.has('underline')) run.underline = true

      runs.push(run)
    })

    paragraphs.push({
      id: previousParagraph?.id ?? `p${paragraphIndex + 1}`,
      runs
    })
  })

  return {
    id: previousModel.id,
    paragraphs
  }
}

export default function DocumentEditor({ document, onDocumentChange }: DocumentEditorProps) {
  const editorElementRef = useRef<HTMLDivElement>(null)

  // Keep the initial document separate from subsequent React renders.
  const initialDocumentRef = useRef(document)

  // Keep the latest model and callback available to editor transactions.
  const currentModelRef = useRef(document)
  const onDocumentChangeRef = useRef(onDocumentChange)

  useEffect(() => {
    onDocumentChangeRef.current = onDocumentChange
  }, [onDocumentChange])

  useEffect(() => {
    const editorElement = editorElementRef.current

    if (!editorElement) return

    const initialDocument = editorSchema.nodeFromJSON(
      convertDocumentToProseMirror(initialDocumentRef.current)
    )

    const state = EditorState.create({
      schema: editorSchema,
      doc: initialDocument,
      plugins: [
        history(),
        keymap({
          'Mod-z': undo,
          'Mod-y': redo,
          'Mod-Shift-z': redo,
          'Mod-b': toggleBold,
          'Mod-i': toggleItalic,
          'Mod-u': toggleUnderline
        }),
        keymap(baseKeymap)
      ]
    })

    let view: EditorView | null = null

    view = new EditorView(editorElement, {
      state,

      dispatchTransaction(transaction) {
        if (!view) return

        const nextState = view.state.apply(transaction)
        view.updateState(nextState)

        if (!transaction.docChanged) return

        const updatedModel = convertProseMirrorToDocumentModel(
          nextState.doc,
          currentModelRef.current
        )

        currentModelRef.current = updatedModel
        onDocumentChangeRef.current(updatedModel)

        console.log('[NovaWriter] Updated DocumentModel:', JSON.stringify(updatedModel, null, 2))
      }
    })

    return () => {
      view?.destroy()
      view = null
    }
  }, [])

  return (
    <div className="novawriter-editor" ref={editorElementRef} aria-label="Document editing area" />
  )
}
