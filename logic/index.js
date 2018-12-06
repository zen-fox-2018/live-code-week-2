function generateChart(data) {
  //your code here
  let maxStock = Math.max.apply(Math, data.map(o => o.stock ));
  let maxDay = Math.max.apply(Math, data.map(o => o.day ));
  for (let i = maxStock + 2; i >= 0; i--) {
    let newColumn = [];
    for (let j = 0; j <= maxDay + 2; j++) {
      let index = data.findIndex( e => e.day === j);
      let indexR = {i : 0, j: 0}
      let stock = maxStock + 3;
      let day = maxDay + 3;
      let urd = '';

      if (index != -1) {
        stock = data[index].stock;
        day = data[index].day;
        if (index + 1 < data.length) {
          if (data[index].stock < data[index + 1].stock) {
            urd = 'U';
          } else if (data[index].stock < data[index + 1].stock) {
            urd = 'D';
          }
        }
      } else {
        urd = 'R';
        indexR = {i: data[index + 1].stock, j: j};
      }
      if (j === 0 && i === 0) {
        newColumn.push('x');
      } else if (j === 0) {
        newColumn.push(i+'');
      } else if (i === 0) {
        newColumn.push(j+'');
      }else if (i === stock && j === day) {
        newColumn.push('#');
      } else {
        newColumn.push(' ');
      }
    }
    console.log(newColumn);
  }
  console.log();
}

const stockData1 = [{
  stock: 4,
  day: 2
}, {
  stock: 2,
  day: 4
}, {
  stock: 7,
  day: 5
}, {
  stock: 7,
  day: 7
}, {
  stock: 4,
  day: 8
}]

generateChart(stockData1)
/*
[
  [ '9', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', 'U', '#', 'R', '#', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
  [ '4', ' ', '#', ' ', 'U', ' ', ' ', 'D', '#', ' ', ' ' ],
  [ '3', ' ', 'D', ' ', 'U', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', 'D', 'R', '#', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ 'x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
]

*/

const stockData2 = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]
generateChart(stockData2)

/*
  [
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '3', 'U', 'R', '#', ' ', ' ', ' ', ' ' ],
    [ '2', '#', ' ', 'D', ' ', ' ', ' ', ' ' ],
    [ '1', ' ', ' ', 'D', 'R', '#', ' ', ' ' ],
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ]
  ]
*/
