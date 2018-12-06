function generateChart(data) {
  let maxj = 0
  let maxi = 0

  let result = []
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].stock+2 > maxi) {
      maxi = data[i].stock + 2
    }
    if (data[i].day+2 > maxj) {}
      maxj = data[i].day + 2
  }
  // console.log(maxi, maxj)
  //  RELEASE 0 ==> done
  let countj = maxi
  let counti = 1
  for (let i = maxi; i >= 0; i--) {
    let temp = [] 
    for (let j = maxj; j >= 0; j--) {
     if (j == maxj && i !== 0) {
       temp.push(String(countj))
       countj--
     } else if ( i == 0) {
       if (j == maxj) {
         temp.push('x')
       } else {
         temp.push(String(counti))
         counti++
       }
     } else {
       temp.push(' ')
     }
    }
    result.push(temp)
  }

  // RELEASE 1 ==> masalah di i sma jnya 
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].stock +1 ,'=====', data[i].day)
    result[data[i].stock+ 1][data[i].day] = '#'
  }

  // RELEASE 2

  console.log(result)
}

const data = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]

generateChart(data)

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

// const stockData2 = [{
//   stock: 2,
//   day: 1
// }, {
//   stock: 3,
//   day: 3
// }, {
//   stock: 1,
//   day: 5
// }]
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
