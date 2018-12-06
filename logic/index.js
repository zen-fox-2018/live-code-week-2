function generateChart(data) {
  let y = data[0].day
  let x = data[0].stock
  let board = []

  for (let i = 1; i < data.length; i++) {
    if (data[i].stock > x) {
      x = data[i].stock
    }
    if (data[i].day > y) {
      y = data[i].day
    }
  }
  x += 2
  y += 2

  for (let i = 0; i < x + 1; i++) {
    let boardTemp = []
    for (let j = 0; j < y + 1; j++) {
      if (j == 0) {
        boardTemp.push(`${x - i}`)
      } else {
        if (i == x) {
          boardTemp.push(`${j}`)
        } else {
          
          boardTemp.push(` `)
        }
      }
    }
    board.push(boardTemp)
  }
  console.log(x, y);
  console.log(board);

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
console.clear()
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
