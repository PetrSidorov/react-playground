import { Fragment, MouseEventHandler, useState } from "react";

enum ECell {
  PLAYER_1,
  PLAYER_2,
}

type TCell = ECell | null;
type TRow = TCell[];

export default function Board({
  rowNumber = 6,
  colNumber = 7,
}: {
  rowNumber?: number;
  colNumber?: number;
}) {
  const initalState = () =>
    Array(rowNumber)
      .fill(null)
      .map(() => {
        return Array(colNumber).fill(null);
      });

  const [rows, setRows] = useState<TRow[]>(initalState);
  const [turn, setTurn] = useState<ECell>(ECell.PLAYER_1);

  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${colNumber}, 100px)`,
    gap: "20px",
    backgroundColor: "#274690",
    padding: "20px",
    borderRadius: "5px",
    width: "fit-content",
  };

  function checkWinner(rowIndex: number, colIndex: number) {
    let win = false;
    if (rows[rowIndex][colIndex + 1] == rows[rowIndex][colIndex]) {
      console.log(
        "rows[rowIndex].slice(colIndex, colIndex + 4): ",
        rows[rowIndex].slice(colIndex, colIndex + 4)
      );

      win = rows[rowIndex]
        .slice(colIndex, colIndex + 4)
        .every((cell) => (cell = turn));
    }
    console.log(win);

    // for (let i = 0; i < rowNumber; i++) {
    //     for (let j = 0; j < colNumber; j++){
    //         if (rows[rowIndex][colIndex]){
    //         }
    //     }
    // }
  }

  function handleClick(rowIndex: number, colIndex: number) {
    checkWinner(rowIndex, colIndex);
    setRows((prevRows) => {
      const newRows = prevRows.slice();
      for (let i = rowNumber - 1; i >= 0; i--) {
        if (newRows[i][colIndex] == null) {
          newRows[i] = newRows[i].slice();
          newRows[i][colIndex] = turn;
          setTurn((currPlayer) => {
            if (currPlayer == ECell.PLAYER_1) {
              return ECell.PLAYER_2;
            }
            return ECell.PLAYER_1;
          });
          break;
        }
      }
      return newRows;
    });
  }
  return (
    <div style={style}>
      {rows.map((row, rowNumber) => {
        return (
          <Fragment key={rowNumber}>
            {row.map((cellState, colNumber) => (
              <Cell
                key={colNumber}
                cellState={cellState}
                handleClick={handleClick}
                rowNumber={rowNumber}
                colNumber={colNumber}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}

function Cell({
  cellState,
  handleClick,
  rowNumber,
  colNumber,
}: {
  cellState: TCell;
  handleClick: Function;
  rowNumber: number;
  colNumber: number;
}) {
  function getColor() {
    if (cellState == ECell.PLAYER_1) {
      return "red";
    }

    if (cellState == ECell.PLAYER_2) {
      return "yellow";
    }

    return "white";
  }

  return (
    <button
      disabled={cellState != null}
      onClick={() => handleClick(rowNumber, colNumber)}
      aria-label={`Row number: ${rowNumber}, column number: ${colNumber}`}
      style={{
        border: "1px solid black",
        borderRadius: "50%",
        height: "100px",
        backgroundColor: getColor(),
      }}
    ></button>
  );
  // color logic
  // handle lcick
  // ui
}
