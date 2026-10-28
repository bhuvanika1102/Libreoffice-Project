
import { useEffect, useRef } from "react";
import { Schema } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { baseKeymap, toggleMark } from "prosemirror-commands";
import { history, undo, redo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";

import type { DocumentModel } from "@novawriter/document-model";
import documentModel from "../../services/document";

import "./editor.css";

// Extend the basic ProseMirror schema to support underline.
const editorSchema = new Schema({
  nodes: basicSchema.spec.nodes,
  marks: basicSchema.spec.marks.addToEnd("underline", {
    parseDOM: [
      { tag: "u" },
      { style: "text-decoration=underline" },
    ],
    toDOM() {
      return ["u", 0];
    },
  }),
});

function convertDocumentToProseMirror(model: DocumentModel) {
  return {
    type: "doc",
    content: model.paragraphs.map((paragraph) => ({
      type: "paragraph",
      content: paragraph.runs
        .filter((run) => run.text.length > 0)
        .map((run) => {
          const marks: Array<{ type: string }> = [];

          if (run.bold) marks.push({ type: "strong" });
          if (run.italic) marks.push({ type: "em" });
          if (run.underline) marks.push({ type: "underline" });

          return {
            type: "text",
            text: run.text,
            ...(marks.length > 0 ? { marks } : {}),
          };
        }),
    })),
  };
}

export default function DocumentEditor() {
  const editorElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editorElement = editorElementRef.current;

    if (!editorElement) return;

    const initialDocument = editorSchema.nodeFromJSON(
      convertDocumentToProseMirror(documentModel),
    );

    const state = EditorState.create({
      schema: editorSchema,
      doc: initialDocument,
      plugins: [
        history(),
        keymap({
          "Mod-z": undo,
          "Mod-y": redo,
          "Mod-Shift-z": redo,
          "Mod-b": toggleMark(editorSchema.marks.strong),
          "Mod-i": toggleMark(editorSchema.marks.em),
          "Mod-u": toggleMark(editorSchema.marks.underline),
        }),
        keymap(baseKeymap),
      ],
    });

    let view: EditorView;

    view = new EditorView(editorElement, {
      state,
      dispatchTransaction(transaction) {
        const nextState = view.state.apply(transaction);
        view.updateState(nextState);
      },
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div
      className="novawriter-editor"
      ref={editorElementRef}
      aria-label="Document editing area"
    />
  );
}
