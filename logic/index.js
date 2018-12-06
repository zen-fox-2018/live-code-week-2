function generateChart(data) {
  // Bikin Board
  let board = []
  let maxStock = 0
  let maxDay = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].stock > maxStock) {
      maxStock = data[i].stock
    }
    if (data[i].day > maxDay) {
      maxDay = data[i].day
    }
  }
  maxStock = maxStock + 2
  maxDay = maxDay + 2
  count = maxStock

  for (let i = 0; i <= maxStock; i++) {
    let temp = []
    for (let j = 0; j <= maxDay; j++) {
      if (i === maxStock) {
        if (j === 0) {
          temp.push('X')
        }
        else {
          temp.push(String(j))
        }
      }
      else {
        if (j === 0) {
          temp.push(count)
          count--
        }
        else {
          temp.push([' '])
        }
      }
    }
    board.push(temp)
  }

  //Masukin data (release 0)
  let placedData = []
  for (let i = 0; i < data.length; i++) {
    let row = maxStock - data[i].stock
    let col = data[i].day
    board[row][col] = "#"
    placedData.push([row, col])

  }

  //Eksekusi
  //Sudah berusaha supaya tidak redundant
  for (let i = 0; i < placedData.length; i++) {
    if (i !== placedData.length-1) {
      let data1 =  placedData[i]
      let data2 = placedData[i+1]

      //Down
      if (data1[0] < data2[0]) {
        let selisih = data2[0] - data1[0]
        for (let j = 1; j <= selisih; j++) {
          board[data1[0]+j][data1[1]] = "D"
        }
        //Right
        let selisihHari = data2[1] - data1[1]
        for (let j = 1; j < selisihHari; j++) {
          board[data1[0]+selisih][data1[1]+j] = "R"
        }
      }
      //Up
      else if (data1[0] > data2[0]) {
        let selisih = data1[0] - data2[0]
        for (let j = 1; j <= selisih; j++) {
          board[data1[0]-j][data1[1]] = "U"
        }
        //Right
        let selisihHari = data2[1] - data1[1]
        for (let j = 1; j < selisihHari; j++) {
          board[data1[0]-selisih][data1[1]+j] = "R"
        }
      }
      //Right
      else if (data1[0] === data2[0]) {
        let selisihHari = data2[1] - data1[1]
        for (let j = 1; j < selisihHari; j++) {
          board[data1[0]][data1[1]+j] = "R"
        }
      }
    }
  }
  return console.log(board);
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
