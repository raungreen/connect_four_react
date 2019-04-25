import React, { Component } from 'react';
// import CreateBoard from './CreateBoard';

//  class CheckBoard extends Component {
//    constructor () {
//      super()
//      this.state = {

//      }
//    }
//    render() {
//   return (
//     <div>
//       // Check status of board
//       let result = this.checkAll(board);
//       if (result === this.state.player1) {
//         this.setState({ board, gameOver: true, message: 'Player 1 (red) wins!' });
//       } else if (result === this.state.player2) {
//         this.setState({ board, gameOver: true, message: 'Player 2 (yellow) wins!' });
//       } else if (result === 'draw') {
//         this.setState({ board, gameOver: true, message: 'Draw game.' });
//       } else {
//         this.setState({ board, currentPlayer: this.togglePlayer() });
//       }
//     } else {
//       this.setState({ message: 'Game over. Please start a new game.' });
//     }
//   }

//   checkVertical(board) {
//     // Check only if row is 3 or greater
//     for (let r = 3; r < 6; r++) {
//       for (let c = 0; c < 7; c++) {
//         if (board[r][c]) {
//           if (board[r][c] === board[r - 1][c] &&
//               board[r][c] === board[r - 2][c] &&
//               board[r][c] === board[r - 3][c]) {
//             return board[r][c];
//           }
//         }
//       }
//     }
//   }

//   checkHorizontal(board) {
//     // Check only if column is 3 or less
//     for (let r = 0; r < 6; r++) {
//       for (let c = 0; c < 4; c++) {
//         if (board[r][c]) {
//           if (board[r][c] === board[r][c + 1] &&
//               board[r][c] === board[r][c + 2] &&
//               board[r][c] === board[r][c + 3]) {
//             return board[r][c];
//           }
//         }
//       }
//     }
//   }

//   checkDiagonalRight(board) {
//     // Check only if row is 3 or greater AND column is 3 or less
//     for (let r = 3; r < 6; r++) {
//       for (let c = 0; c < 4; c++) {
//         if (board[r][c]) {
//           if (board[r][c] === board[r - 1][c + 1] &&
//               board[r][c] === board[r - 2][c + 2] &&
//               board[r][c] === board[r - 3][c + 3]) {
//             return board[r][c];
//           }
//         }
//       }
//     }
//   }

//   checkDiagonalLeft(board) {
//     // Check only if row is 3 or greater AND column is 3 or greater
//     for (let r = 3; r < 6; r++) {
//       for (let c = 3; c < 7; c++) {
//         if (board[r][c]) {
//           if (board[r][c] === board[r - 1][c - 1] &&
//               board[r][c] === board[r - 2][c - 2] &&
//               board[r][c] === board[r - 3][c - 3]) {
//             return board[r][c];
//           }
//         }
//       }
//     }
//   }

//   checkDraw(board) {
//     for (let r = 0; r < 6; r++) {
//       for (let c = 0; c < 7; c++) {
//         if (board[r][c] === null) {
//           return null;
//         }
//       }
//     }
//     return 'draw';
//   }

//   checkAll(board) {
//     return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
//   }

//   componentWillMount() {
//     this.initBoard();
//   }

//   render() {
//     return (
//       <div>
//         <div className="button" onClick={() => {this.initBoard()}}>New Game</div>

//         <table>
//           <thead>
//           </thead>
//           <tbody>
//             {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
//           </tbody>
//         </table>

//         <p className="message">{this.state.message}</p>
//       </div>
//     );
//   }
// }
//     </div>

// export default CheckBoard;
