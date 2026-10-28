
import type { DocumentModel } from "@novawriter/document-model";

type TextRun = DocumentModel["paragraphs"][number]["runs"][number];

interface RunRendererProps {
  run: TextRun;
}

export default function RunRenderer({ run }: RunRendererProps) {
  return (
    <span
      style={{
        fontWeight: run.bold ? "bold" : "normal",
        fontStyle: run.italic ? "italic" : "normal",
        textDecoration: run.underline ? "underline" : "none",
        whiteSpace: "pre-wrap",
      }}
    >
      {run.text}
    </span>
  );
}
