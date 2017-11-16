import React from "react";
import Box from "./Box";

function Line(props, indexX) {
  let indexTab = indexX * 15;
  const grid = Array(15)
    .fill(null)
    .map(() => indexTab++);
  return grid.map(indexY => (
    <Box
      key={indexY.toString()}
      value={props.boxes[indexY]}
      onClick={() => props.onClick(indexY)}
    />
  ));
}

export default Line;
