import { colors, spacing, sizes, typography } from "../../styles";

export default function MenuBar() {
    return (
      <div
      style={{
        height: sizes.menuBarHeight,
      
        background: colors.surface,
      
        borderBottom: `1px solid ${colors.border}`,
      
        display: "flex",
      
        alignItems: "center",
      
        padding: `0 ${spacing.md}px`,
      
        gap: spacing.lg,
      
        fontSize: typography.fontSize.sm,
      
        fontFamily: typography.fontFamily,
      
        userSelect: "none",
      
        color: colors.textPrimary
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