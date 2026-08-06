import React from "react";
import Box from "../Box/Box";

interface FlexProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Flex({
  children,
  style
}: FlexProps) {
  return (
    <Box
      style={{
        display: "flex",
        ...style
      }}
    >
      {children}
    </Box>
  );
}