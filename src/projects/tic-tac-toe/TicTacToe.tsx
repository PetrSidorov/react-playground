import { useState, useEffect } from "react";
import Cell from "./Cell";
import { BoardType, MarkerEnum, MarkerType } from "./types";
import Message from "./Message";
export default function Tic() {
  const [boardData, setBoardData] = useState<BoardType | null>(null);
  const [start, setStart] = useState<true | false>(false);
  const [turn, setTurn] = useState<MarkerType | false>(false);
  const [winner, setWinner] = useState<MarkerType | false>(false);

  const intialData = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  useEffect(() => {
    boardInit();
  }, [start]);

  useEffect(() => {
    // console.log("state w", winner);
    if (winner) {
      console.log("the winner indeed is ");
    }
  }, [winner]);

  function boardInit() {
    setBoardData(intialData);
  }

  function updateTurn() {
    setTurn((curr) => {
      return curr == MarkerEnum.Cross ? MarkerEnum.Circle : MarkerEnum.Cross;
    });
  }

  function checkWinner(board: BoardType) {
    if (!board) return;

    for (let row = 0; row < board.length; row++) {
      if (board[row].every((cell) => cell === turn)) {
        console.log("winner ", turn);
      }

      for (let cell = 0; cell < board.length; cell++) {
        console.log(`row: ${row}, cell: ${cell}, val: ${board[row][cell]}`);
        console.log("------");
        // break;
      }
    }
  }

  function makeMove(clickedRow: number, clickedCol: number) {
    setBoardData((oldBoard) => {
      const updatedBoard = oldBoard?.map(function (row, rowIndex) {
        if (rowIndex === clickedRow) {
          return [
            ...row.map(function (col, colIndex) {
              if (colIndex == clickedCol) {
                return turn;
              } else {
                return col;
              }
            }),
          ];
        } else {
          return [...row];
        }
      });
      checkWinner(updatedBoard);
      return updatedBoard;
    });

    updateTurn();
  }

  const board = boardData?.map((row, rowIndex) =>
    row.map((value, colIndex) => (
      <Cell
        key={rowIndex + colIndex}
        row={rowIndex}
        col={colIndex}
        handleClick={makeMove}
        value={value}
      />
    ))
  );

  return (
    <div className="tic__container">
      <div className="tic__board">{board}</div>
      <div className="tic__pop-up">
        <Message />
      </div>
    </div>
  );
}
