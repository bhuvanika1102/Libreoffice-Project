import React from "react";
import { typography, colors } from "../../../styles";

interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Text({
  children,
  style
}: TextProps) {
  return (
    <span
      style={{
        fontFamily: typography.fontFamily,
        color: colors.textPrimary,
        ...style
      }}
    >
      {children}
    </span>
  );
}