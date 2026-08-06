export default function StatusBar() {
    return (
      <div
        style={{
          height: "30px",
          background: "#f8f8f8",
          borderTop: "1px solid #dcdcdc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          fontSize: "13px"
        }}
      >
        <span>Page 1</span>
  
        <span>Words: 0</span>
  
        <span>UTF-8</span>
  
        <span>Zoom: 100%</span>
      </div>
    );
  }