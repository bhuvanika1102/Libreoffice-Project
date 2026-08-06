export default function Ribbon() {
    return (
      <div
        style={{
          height: "42px",
          background: "#ffffff",
          borderBottom: "1px solid #dcdcdc",
          display: "flex",
          alignItems: "center",
          paddingLeft: "16px",
          gap: "24px"
        }}
      >
        <span>Home</span>
        <span>Insert</span>
        <span>Layout</span>
        <span>Review</span>
        <span>View</span>
      </div>
    );
  }