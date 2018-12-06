function generateChart(data) {
  //your code here
  let maxY = data[0].stock
  for(let i = 0; i < data.length; i++) {
    if(data[i].stock > maxY) {
      maxY = data[i].stock
    }
  }

  let maxX = data[0].day
  for(let i = 0; i < data.length; i++) {
    if(data[i].day > maxX) {
      maxX = data[i].day
    }
  }

  let row = []
  for(let i = maxY+2; i >= 0; i--){
    let col = []
    for(let j = 0; j <= maxX+2; j++) {
      if(j == 0 && i !== 0) {
        col.push(String(i))
      }else if (j == 0 && i == 0) {
        col.push('x')
      }else if (i == 0) {
        col.push(String(j))
      }else{
        col.push(' ')
      }      
    }
    row.push(col)
  }

  for(let i = 0; i < data.length; i++) {
    let x = data[i].day
    let y = data[i].stock+1
    row[y][x] = '#'
  }

  // for(let i = 0; i < data.length; i++) {
  //   let x = data[i].day
  //   let y = data[i].stock+1
  //   for(let j = 0; j < row.length; i++) {
  //     for(let k = 0; k < row[i].length; k++) {
        
  //     }
  //   }
  // }
  console.log(row)
  return ''
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
