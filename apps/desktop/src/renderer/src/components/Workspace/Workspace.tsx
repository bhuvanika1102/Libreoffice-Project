
import { useCallback, useState } from "react";

import type { DocumentModel } from "@novawriter/document-model";
import documentModel from "../../services/document";
import DocumentEditor from "../Editor/DocumentEditor";

export default function Workspace() {
  const [currentDocument, setCurrentDocument] =
    useState<DocumentModel>(documentModel);

  const handleDocumentChange = useCallback(
    (updatedDocument: DocumentModel) => {
      setCurrentDocument(updatedDocument);

      // Temporary development log for verifying synchronization.
      console.debug(
        "[NovaWriter] DocumentModel synchronized:",
        updatedDocument,
      );
    },
    [],
  );

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        background: "#e8e8e8",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "auto",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          flexShrink: 0,
          width: "794px",
          minHeight: "1123px",
          padding: "96px 90px",
          background: "#ffffff",
          boxShadow: "0 0 12px rgba(0,0,0,.15)",
          color: "#222222",
        }}
      >
        <DocumentEditor
          document={currentDocument}
          onDocumentChange={handleDocumentChange}
        />
      </div>
    </div>
  );
}
