import React from "react";
import Line from "./Line";

class Grid extends React.Component {
  renderGrid() {
    let indexTab = 0;
    const grid = Array(15)
      .fill(null)
      .map(() => indexTab++);
    return grid.map(indexX => (
      <div className="grid-line" key={indexX.toString()}>
        {Line(this.props, indexX)}
      </div>
    ));
  }

  render() {
    return <div>{this.renderGrid()}</div>;
  }
}

export default Grid;
