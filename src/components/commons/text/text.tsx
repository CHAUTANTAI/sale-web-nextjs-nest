import React from "react";

export interface PoppinsTextProps {
  size?: number;
  weight?: "semibold" | "normal" | "bold" | "medium" | "extrabold";
  text?: string;
  textOpacity?: number;
  color?: "black" | "white" | "text";
  underline?: boolean;
  underlineColor?: string;
  underlineOpacity?: number;
}

export const PoppinsText = ({
  size = 14,
  weight = "normal",
  text = "",
  textOpacity = 1,
  color = "white",
  underline = false,
  underlineColor = "black", // Default underline color to black
  underlineOpacity = 0.5, // Default opacity 50%
}: PoppinsTextProps) => {
  const style = {
    color: `var(--color-${color})`,
    fontWeight:
      weight === "semibold"
        ? 600
        : weight === "normal"
          ? 400
          : weight === "bold"
            ? 700
            : weight === "medium"
              ? 500
              : weight === "extrabold"
                ? 800
                : undefined,
    fontSize: `${size}px`,
    position: "relative" as "relative",
    opacity: textOpacity,
  };
  const underlineStyle = {
    content: '""',
    position: "absolute" as "absolute",
    left: 0,
    bottom: 2,
    width: "100%",
    height: "1.5px", // Thickness of the underline
    backgroundColor: underline ? underlineColor : "transparent",
    opacity: underline ? underlineOpacity : 0, // Apply opacity to the underline
  };

  return (
    <div className={`poppinsFont`} style={style}>
      {text}
      {underline && <div style={underlineStyle}></div>}
    </div>
  );
};
