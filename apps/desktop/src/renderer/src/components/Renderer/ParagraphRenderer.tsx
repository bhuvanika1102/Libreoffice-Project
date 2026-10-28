
import type { DocumentModel } from "@novawriter/document-model";
import RunRenderer from "./RunRenderer";

type Paragraph = DocumentModel["paragraphs"][number];

interface ParagraphRendererProps {
  paragraph: Paragraph;
}

export default function ParagraphRenderer({
  paragraph,
}: ParagraphRendererProps) {
  return (
    <p
      style={{
        margin: "0 0 12px",
        minHeight: "1.2em",
        fontFamily: "Arial, sans-serif",
        fontSize: "12pt",
        lineHeight: 1.5,
        overflowWrap: "break-word",
      }}
    >
      {paragraph.runs.map((run) => (
        <RunRenderer key={run.id} run={run} />
      ))}
    </p>
  );
}
