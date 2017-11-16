import React from "react";
import box from "./box.css";

function Box(props) {
  return (
    <button className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Box;
