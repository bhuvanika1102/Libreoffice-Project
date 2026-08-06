import React from "react";

interface RibbonGroupProps {
  title: string;
  children: React.ReactNode;
}

export default function RibbonGroup({
  title,
  children
}: RibbonGroupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 8,
        borderRight: "1px solid #ddd",
        minWidth: 220
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 6
        }}
      >
        {children}
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: 11,
          color: "#777"
        }}
      >
        {title}
      </div>
    </div>
  );
}