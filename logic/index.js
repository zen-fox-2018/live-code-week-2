function generateCoor(board,data) {
  //let newboard = board
  for(let i = board.length; i > 0; i--){
    console.log(board)
    let holder = []
    for(let j = 1; j < board[i].length; j++) {
      for(let k = 0; k < data.length; k++){
        if(data[i].stock == newboard[i] && data[i].day == newboard[i][j]){
          newboard[i][j] = '#'
          }
        }
      }
    }
 // console.log(board)
}

function makeBoard (x,y) {
  let board = []
  for(let i = x+1; i > 0; i--){
    let holder = []
    for(let j = 1; j <= y; j++) {
      if( j == 1){
        holder.push(String(i-1))
      }
      else if(i == 1 && j !== 1) {
        holder.push(String(j-1))
      }
      else {
        holder.push(' ')
      }
    }
    board.push(holder)
  }
  return board

}
//makeBoard()

function generateChart(data) {
  let stockY = 0
  let dayX = 0
  for(let i = 0; i < data.length; i++) {
    if(data[i].stock > stockY) {
      stockY = data[i].stock
    }
    if(data[i].day > dayX) {
      dayX =  data[i].day
    }
  }
  let length = []
  length[0] = stockY+2
  length[1] = dayX+2

  let board = makeBoard(length[0],length[1])
  return generateCoor(board,data)

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
