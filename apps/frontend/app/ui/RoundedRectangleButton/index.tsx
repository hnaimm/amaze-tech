import React from "react";

const RoundedRectangleButton = ({
  children,
  color = "#8f8f8f",
  backgroundColor,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  className?: string;
}) => {
  return (
    <button
      className={`py-2 px-5 rounded-3xl border border-1 ${className}`}
      style={{
        color: color,
        borderColor: backgroundColor || color,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </button>
  );
};

export default RoundedRectangleButton;
