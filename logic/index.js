function generateChart(data) {
  //your code here
  let y = []
  let x = []
  for (let i = 0 ; i < data.length ; i++) {
    y.push(data[i].stock)
  }
  for (let i = 0 ; i < data.length ; i++) {
    x.push(data[i].day)
  }
  y = Math.max(...y) + 2
  x = Math.max(...x) + 2

  let output = []
  for (let i = 0 ; i <= y ; i++) {
    let arrDalam = []
    for (let j = 0 ; j <= x ; j++){
      if (j === 0 & i === 0) {
        arrDalam.push('x')
      } else if (j === 0 && i !== 0){
        arrDalam.push(i + '')
      } else if (i === 0 && j > 0){
        arrDalam.push(j + '')
      } else {
        if (checkData(i, j, data)) {
          arrDalam.push('#')
        } else {
          arrDalam.push(' ')
        }
      }
    }
    output.unshift(arrDalam)
  }

  console.log(output);
}

function checkData(y, x, data){
  for (let i = 0 ; i < data.length ; i++) {
    if (y === data[i].stock && x === data[i].day){
      return true
    }
  }

  return false
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
