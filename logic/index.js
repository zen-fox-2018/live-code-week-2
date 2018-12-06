function generateChart(data) {
  //your code here
  //Release 0 buat board Y stockMax+2, X dayMax+2
  let findMaxStock = 0;
  let findMaxDay = 0;
  for (let i = 0; i <= data.length-1; i++) {
    if (data[i].stock >= findMaxStock) {
      findMaxStock = data[i].stock
    } 
    if (data[i].day >= findMaxDay) {
      findMaxDay = data[i].day
    }
  }
  let x = findMaxDay + 2;
  let y = findMaxStock + 2;
  let theBoard = [];
  for (let i = y; i >= 0; i--) {
    let tempBoard = [];
    for (let j = 0; j <= x; j++) {
      if (i === 0 && j === 0) {
        tempBoard.push("x");
      } else if (i === 0 && j != 0) {
        tempBoard.push(j.toString());
      } else if (i != 0 && j === 0) {
        tempBoard.push(i.toString());
      } else {
        tempBoard.push(" ")
      }
    }
    theBoard.push(tempBoard);
  }

  //release 1 put stock and day on the board
  for (let i = 0; i <= data.length-1; i++) {
    for (let j = 0; j <= theBoard.length-1; j++) {
      let isMatch = false;
        if (data[i].stock == theBoard[j][0]) {
          for (let k = 0; k <= theBoard[theBoard.length-1].length-1; k++) {
            if (data[i].day == theBoard[theBoard.length-1][k]) {
              var index = k
              isMatch = true;
            }
          }
        }
        if (isMatch === true) {
          theBoard[j][index] = "#"
        }
    }
  }

  //release 2 monitor movement "U", "D", "R"
  
  for (let i = 0; i <= theBoard.length-1; i++) {
    for (let j = 0; j <= theBoard[i].length-1; j++) {
      if (theBoard[i][j] === "#") {
        for (let k = 0; k <= theBoard.length-1; k++) {
          for (let l = j; l <= theBoard[k].length-1; l++) {
            if (theBoard[k][l] === "#") {
              var nextStockX = k
              var nextStockY = l
              break;
            }
          }
        }
      }
      if (nextStockX != undefined) {
        if(nextStockX < i) {
          theBoard[i-1][j] == "U"
        } else if (nextStockY > j) {
          theBoard[i][j+1] == "R"
        }
      }
    }
  }
  console.log(theBoard);
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
