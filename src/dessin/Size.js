import React from "react";

const Size = ({ columns, rows, onChange }) => [
  <input
    className="size"
    key="columns"
    onChange={event => onChange(event.target.value, rows)}
    value={columns}
  />,
  <input
    className="size"
    key="rows"
    onChange={event => onChange(columns, event.target.value)}
    value={rows}
  />
];

export default Size;
