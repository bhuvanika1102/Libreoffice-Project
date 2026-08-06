import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}