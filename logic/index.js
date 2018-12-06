function generateChart(data) {
  //your code here
  let sumbuX = 0
  let sumbuY = 0
  for(let i = 0 ; i < data.length; i++){
    if(sumbuY < data[i].stock){
      sumbuY = data[i].stock
    }
    if(sumbuX < data[i].day ){
      sumbuX = data[i].day
    }
  }
  sumbuX += 2 
  day = sumbuX//curr banyak day
  sumbuY += 2 
  stock =sumbuY// curr banyak stock
  // console.log(sumbuX);
  // console.log(sumbuY);
  let board = []
  for(let i = stock ; i >= 0 ; i--){
    let boardDalam = []
    for(let j = 0 ; j <= day ; j++){
      if(j == 0 && i == 0){
        boardDalam.push('X')
      } else if(j == 0 && i != 0){
        boardDalam.push(`${i}`)
      } else  if (i == 0 && j != 0){
        boardDalam.push(`${j}`)
      } else{

        boardDalam.push(' ')
      }
     
    }
    board.push(boardDalam)
  }

  for(let i = 0 ; i < data.length ; i++) {
    let x = data[i].day
    let y = stock - data[i].stock
    board[y][x] = '#'
  }
  
  return console.log(board)

}

// const stockData1 = [{
//   stock: 4,
//   day: 2
// }, {
//   stock: 2,
//   day: 4
// }, {
//   stock: 7,
//   day: 5
// }, {
//   stock: 7,
//   day: 7
// }, {
//   stock: 4,
//   day: 8
// }]

// generateChart(stockData1)
// /*
// [
//   [ '9', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '7', ' ', ' ', ' ', 'U', '#', 'R', '#', ' ', ' ', ' ' ],
//   [ '6', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
//   [ '5', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
//   [ '4', ' ', '#', ' ', 'U', ' ', ' ', 'D', '#', ' ', ' ' ],
//   [ '3', ' ', 'D', ' ', 'U', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '2', ' ', 'D', 'R', '#', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ 'x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
// ]

// */

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
