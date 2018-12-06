function generateChart(data) {
  //your code here
  let stock = []
  let day = []
  
  for(let i = 0; i < data.length; i++) {
    stock.push(Object.values(data[i])[0])
    day.push(Object.values(data[i])[1])
  }
  let length = stock[stock.sort().length-1] + 3
  let heigth = day[day.sort().length-1] + 3
  console.log(length)
  console.log(heigth)

  let result = []
  for(let i = 0; i < heigth; i++) {
    let inner = []
    for(let j = 0; j < length; j++) {
      inner.push(' ')
    }
    result.push(inner)
  }

  console.log(result)
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
  [ '9', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ], // 0
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ], // 1
  [ '7', ' ', ' ', ' ', 'U', '#', 'R', '#', ' ', ' ', ' ' ], // 2
  [ '6', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ], // 3
  [ '5', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ], // 4
  [ '4', ' ', '#', ' ', 'U', ' ', ' ', 'D', '#', ' ', ' ' ], // 5
  [ '3', ' ', 'D', ' ', 'U', ' ', ' ', ' ', ' ', ' ', ' ' ], // 6
  [ '2', ' ', 'D', 'R', '#', ' ', ' ', ' ', ' ', ' ', ' ' ], // 7
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ], // 8
  [ 'x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ] // 9 == 10
     0    1    2    3    4    5    6    7    8    9    10 == 11
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
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ], 0
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ], 1
    [ '3', 'U', 'R', '#', ' ', ' ', ' ', ' ' ], 2
    [ '2', '#', ' ', 'D', ' ', ' ', ' ', ' ' ], 3
    [ '1', ' ', ' ', 'D', 'R', '#', ' ', ' ' ], 4
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ]  5 == stock + 3
       0    1    2    3    4    5    6    7 == day + 3
  ] 
*/
