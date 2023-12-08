const initialData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(data) {
  const cube = [];
  let row = [];
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < data.length; i++) {
      if (row.length == 3) {
        cube.push(row);
        row = [];
      }
      row.unshift(data[i][k]);
    }
  }
  console.log(cube);
}
// function rotate(data) {
//     while (row.length) {

//     }
//   const row = [];
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//       let k = 0;
//       row.unshift(data[i][k]);
//       break;
//     }
//   }
//   console.log(row);
// }

console.log(rotate(initialData));
