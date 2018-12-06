function generateChart(data) {
  //your code here
  let Ymax = 0
  let Xmax = 0
  // let arrStock = []
  // let arrDay = []

  for (let i = 0; i < data.length; i++) {
    // arrDay.push(data[i].day)
    // arrStock.push(data[j].stock)

    if (data[i].stock > Ymax) {
      Ymax = data[i].stock
    }
    if (data[i].day > Xmax) {
      Xmax = data[i].day
    }
  }

  Ymax += 2
  Xmax += 2

  let arrBoard = []
  for (let i = Ymax; i >= 0; i--) {
    let arrRow = []
    for (let j = 0; j < Xmax + 1; j++) {
      if (j == 0 && i == 0) {
        arrRow.push('X')
      }
      else if (j == 0) {
        arrRow.push(String(i))
      }
      else if (i == 0) {
        arrRow.push(String(j))
      }
      else {
        arrRow.push(' ')
      }
    }
    arrBoard.push(arrRow)
  }

  for (let i = 0; i < arrBoard.length; i++) {
    for (let j = 0; j < arrBoard[i].length; j++) {
      for (let k = 0; k < data.length; k++) {
        if (arrBoard.length - i - 1 == data[k].stock && j == data[k].day) {
          arrBoard[i][j] = '#'
        }
      }
    }
  }

  let arrU =[]
  let arrD = []
  let arrR = []
  let arrL = []
  let distance = 0

  for (let k = 0; k < data.length; k++) {
    if(data[k+1].stock > data[k].stock){
      for(let i = data[k].stock; i < data[k+1].stock; i++){
        arrU.push([i, data[k].stock])
      }
    }
    if(data[k+1].stock < data[k].stock){
      for(let i = data[k+1].stock; i < data[k].stock; i++){
        arrD.push([i, data[k+1].stock])
      }
    }
  }




  // console.log(Ymax, Xmax)
  console.log(arrBoard)
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
// generateChart(stockData2)

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
