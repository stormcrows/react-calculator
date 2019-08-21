import React from "react";

import "./Display.css";

export default function Display({ text, className }) {
  return <div className={`display ${className}`}>{text}</div>;
}
