import React from "react";

interface BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function Box({
  children,
  style,
  className
}: BoxProps) {
  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}