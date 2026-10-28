
import type { DocumentModel } from "@novawriter/document-model";
import ParagraphRenderer from "./ParagraphRenderer";

interface DocumentRendererProps {
  document: DocumentModel;
}

export default function DocumentRenderer({
  document,
}: DocumentRendererProps) {
  return (
    <div>
      {document.paragraphs.map((paragraph) => (
        <ParagraphRenderer
          key={paragraph.id}
          paragraph={paragraph}
        />
      ))}
    </div>
  );
}
