import React from "react";
import "./button.css";

export default function Button(props) {
  return <button className={`Button-${props.size}`}>{props.text}</button>;
}
