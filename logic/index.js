function generateChart(data) {
  let y = 0
  let x = 0
  data.forEach(element => {
    if (element.stock > y) {
      y = element.stock
    }
    if(element.day > x) {
      x = element.day
    } 
  });
  let board = []
  console.log(y,x)
  y = y+2
  x = x+2
  let county = y
  for (let i = 0 ; i <= y ; i++) {
    let subboard = []
    console.log(i)
    for (let j = 0 ; j <= x; j++) {
      // console.log(j)
      if (i === y && j === 0) {
        subboard.push("X")
      } else  if(j === 0){
        subboard.push(String(county))
        county--
      } else if (i === y){
        subboard.push(String(j))
      } else {
        subboard.push("-")
      }
    }
    board.push(subboard)
  }
  console.log(board)

  for(let i = 0 ; i < data.length ; i++ ) {
    console.log(data[i])
     let row = data[i].stock 
     let col = data[i].day
      board[row +1 ][col] = "0"
  }
  console.log(board)
  //your code here
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

// generateChart(stockData1)
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
