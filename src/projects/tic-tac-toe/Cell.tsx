export default function Cell({
  value,
  handleClick,
  row,
  col,
}: {
  value: null | "cross" | "circle";
  handleClick: (row: number, cell: number) => void;
  row: number;
  col: number;
}) {
  return (
    <div className="tic__cell" onClick={() => handleClick(row, col)}>
      {value}
    </div>
  );
}
