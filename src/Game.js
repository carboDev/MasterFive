import React, { Component } from "react";
import Grid from "./dessin/Grid";
import Winner from "./ia/Winner";
import Size from "./dessin/Size";

class Game extends Component {
  constructor(props) {
    super(props);
    this.changeXY = this.changeXY.bind(this);
    this.state = {
      history: [{ boxes: Array(225).fill(null) }],
      step: 0,
      nextX: true,
      win: null,
      columns: 15,
      rows: 15
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const boxes = { ...current.boxes };
    if (boxes[i] || this.state.win !== null) {
      return;
    }
    boxes[i] = this.state.nextX ? "X" : "O";
    if (Winner(boxes, i)) {
      this.setState({
        history: history.concat([
          {
            boxes: boxes
          }
        ]),
        step: history.length,
        win: boxes[i]
      });
    }
    this.setState({
      history: history.concat([
        {
          boxes: boxes
        }
      ]),
      step: history.length,
      nextX: !this.state.nextX
    });
  }

  changeXY(columns, rows) {
    this.setState({
      columns: parseInt(columns),
      rows: parseInt(rows),
      history: [{ boxes: Array(columns * rows).fill(null) }],
      step: 0,
      nextX: true,
      win: null
    });
    console.log(this.state);
  }

  jumpTo(step) {
    this.setState({
      step: step,
      nextX: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.step];

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (this.state.win !== null) {
      status = "Winner : " + this.state.win;
    } else {
      status = "Prochain joueur : " + (this.state.nextX ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Grid boxes={current.boxes} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div>
          <Size
            columns={this.state.columns}
            rows={this.state.rows}
            onChange={this.changeXY}
          />
        </div>
      </div>
    );
  }
}

export default Game;
