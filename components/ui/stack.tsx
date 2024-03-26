"use client";

import React from "react";

type StackProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
  header?: string;
  headerStyle?: string;
  gap?: number;
  className?: string;
};

export const Stack = ({
  children,
  direction = "column",
  header,
  headerStyle,
  gap,
  className,
}: StackProps) => {
  const flexDirection = direction === "row" ? "h-stack" : "v-stack";
  return (
    <div className={`w-full ${flexDirection} gap-${gap} ${className}`}>
      {header && <p className={`${headerStyle}`}>{header}</p>}
      {children}
    </div>
  );
};
