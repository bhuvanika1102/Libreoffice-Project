
import DocumentEditor from "../Editor/DocumentEditor";

export default function Workspace() {
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
        <DocumentEditor />
      </div>
    </div>
  );
}
