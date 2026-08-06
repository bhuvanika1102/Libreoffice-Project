export default function MenuBar() {
    return (
      <div
        style={{
          height: "36px",
          background: "#f8f8f8",
          borderBottom: "1px solid #dcdcdc",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: "20px",
          fontSize: "14px",
          userSelect: "none"
        }}
      >
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>
        <span>Help</span>
      </div>
    );
  }