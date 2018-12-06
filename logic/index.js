function generateChart(data) {
  let maxX = 0;
  let maxY = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].stock > maxY) {
      maxY = data[i].stock;
    }
    if (data[i].day > maxX) {
      maxX = data[i].day;
    }
  }
  
  let arrLuar = [];
  let index = [];
  for (let i = maxY + 2; i >= 0; i--) {
    let arrDalam = [];
    for (let j = 0; j <= maxX + 2; j++) {
      if (j == 0 && i == 0) {
        arrDalam.push('X');
      } else if (i == 0) {
        arrDalam.push(j.toString());
      } else if (j == 0) {
        arrDalam.push(i.toString());
      } else {
        let isTrue = false;
        for(let k = 0; k < data.length; k++) {
          if (i === data[k].stock && j === data[k].day) {
            arrDalam.push('#');
            index.push([i, j]);
            isTrue = true;
          } 
        }
        if (!isTrue) {
          arrDalam.push(' ');
        }
      }
    }
    arrLuar.push(arrDalam);
  }
  console.log(FindIndex(index));
  console.log(arrLuar); 
}

function FindIndex(index) {
  console.log(index);
  for (let i = 0; i < index.length - 1; i++) {
    if (index[i][0] > index[i+1][0]) {
      
    }
  }
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
