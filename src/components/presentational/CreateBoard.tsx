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
    console.log('I have created a new board');
    console.log();
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
      console.log(`I have played ${c}`);
      console.log(`I am player ${this.state.currentPlayer}`);
      this.boardCheck(this.state.board);
    }
  }
  //  Check status of board

  boardCheck(board: number[][]) {
    let result = this.checkAll(board);

    if (result === this.state.player1) {
      this.setState({ board, gameOver: true, message: 'Player 1 (red) wins!' });
    } else if (result === this.state.player2) {
      this.setState({
        board,
        gameOver: true,
        message: 'Player 2 (yellow) wins!'
      });
    } else if (result === 'draw') {
      this.setState({ board, gameOver: true, message: 'Draw game.' });
    } else {
      this.setState({ board, currentPlayer: this.togglePlayer() });
      // } else {
      // this.setState({ message: 'Game over. Please start a new game.' });
    }
  }

  checkVertical(board: number[][]) {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkHorizontal(board: number[][]) {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalRight(board: number[][]) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDiagonalLeft(board: number[][]) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  checkDraw(board: number[][]) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  checkAll(board: number[][]) {
    return (
      this.checkVertical(board) ||
      this.checkDiagonalRight(board) ||
      this.checkDiagonalLeft(board) ||
      this.checkHorizontal(board) ||
      this.checkDraw(board)
    );
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
    console.log(`I have  ${color}`);

    return (
      <td>
        <div
          className="cell"
          onClick={() => {
            play(columnIndex);
            console.log(columnIndex);
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
            console.log('I have started a new game');
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
