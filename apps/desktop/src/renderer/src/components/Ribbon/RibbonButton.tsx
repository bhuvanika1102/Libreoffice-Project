interface RibbonButtonProps {
    label: string;
    onClick?: () => void;
  }
  
  export default function RibbonButton({
    label,
    onClick
  }: RibbonButtonProps) {
    return (
      <button
        onClick={onClick}
        style={{
          width: 70,
          height: 60,
          border: "1px solid #ddd",
          background: "#fff",
          cursor: "pointer",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12
        }}
      >
        <div
          style={{
            fontSize: 20
          }}
        >
          □
        </div>
  
        <div>{label}</div>
      </button>
    );
  }