import React from "react";

export default function Temperature({ temp }) {
  if (temp >= 100) {
    return <p>Water is boiling!</p>;
  } else {
    return <p>Water is cold af!!</p>;
  }
  return <></>;
}
