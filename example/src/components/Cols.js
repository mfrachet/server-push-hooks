import React from "react";

export const Col = ({ size = 1, children }) => (
  <div style={{ flex: size }}>{children}</div>
);

export const Cols = ({ children }) => (
  <div style={{ display: "flex" }}>{children}</div>
);
