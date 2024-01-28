"use client";

import React from "react";

type StackProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
  header?: string;
  headerStyle?: string;
  gap?: number;
  classname?: string;
};

export const Stack = ({
  children,
  direction = "column",
  header,
  headerStyle,
  gap,
  classname
}: StackProps) => {
  const flexDirection = direction === "row" ? "h-stack" : "v-stack";
  return (
    <div className={`w-full ${flexDirection} gap-${gap} ${classname}`}>
      {header && <p className={`${headerStyle}`}>{header}</p>}
      {children}
    </div>
  );
};
