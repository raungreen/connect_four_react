import React, { Component } from 'react';
// import { Row, Cell } from 'reactstrap';
import { any } from 'prop-types';

class CreateBoard extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };

    this.play = this.play.bind(this);
  }
  // Starts new game
  initBoard() {
    // blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null);
      }
      board.push(row);
    }

    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }

  togglePlayer = () => {
    return this.state.currentPlayer === this.state.player1
      ? this.state.player2
      : this.state.player1;
  };

  play(c: number) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }
    }
  }
  // Row component
  Row = ({ row, play }: { row: any; play: any }) => {
    return (
      <tr>
        {row.map((cell: number, i: number) => (
          <this.Cell key={i} value={cell} columnIndex={i} play={play} />
        ))}
      </tr>
    );
  };
  Cell = ({
    value,
    columnIndex,
    play
  }: {
    value: number;
    columnIndex: number;
    play: any;
  }) => {
    let color = 'white';
    if (value === 1) {
      color = 'red';
    } else if (value === 2) {
      color = 'yellow';
    }

    return (
      <td>
        <div
          className="cell"
          onClick={() => {
            play(columnIndex);
          }}
        >
          <div className={color} />
        </div>
      </td>
    );
  };

  componentWillMount() {
    this.initBoard();
  }

  render() {
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            this.initBoard();
          }}
        >
          New Game
        </div>

        <table>
          <thead />
          <tbody>
            {this.state.board.map((row: number, i: number) => (
              <this.Row key={i} row={row} play={this.play} />
            ))}
          </tbody>
        </table>

        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

export default CreateBoard;
