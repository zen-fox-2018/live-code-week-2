function generateChart(data) {
  let maxY = findMaxStocks(data)
  let maxX = findMaxDays(data)
  let result = []
  for (let i = maxY - 1; i >= 0; i--) {
    let resultTmp = []
    for (let j = 0; j < maxX; j++) {
      if (i === 0 && j === 0) {
        resultTmp.push('x')
      } else if (j === 0) {
        resultTmp.push(i.toString())
      } else if (i === 0) {
        resultTmp.push(j.toString())
      } else {
        resultTmp.push(' ')
      }
    }
    result.push(resultTmp)
  }
  console.log(addDataFromGenerateChart(maxY, maxX, result, data))
}

function addDataFromGenerateChart(maxY, maxX, release0, data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = release0.length - 1; j >= 0; j--) {
      for (let k = 0; k < release0[j].length; k++) {
        if (data[i].stock === maxY - j - 1 && data[i].day === k) {
          release0[j][k] = '#'
        }
      }
    }
  }
  return release0
}

function findMaxStocks(data) {
  let max = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].stock > max) {
      max = data[i].stock
    }
  }
  return max + 3
}

function findMaxDays(data) {
  let max = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].day > max) {
      max = data[i].day
    }
  }
  return max + 3
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
