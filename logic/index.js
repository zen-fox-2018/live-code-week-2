function generateBoard(data){
  //find highest Value
  var highestStock = 0;
  var highestDay = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].stock > highestStock) {
      highestStock = data[i].stock;
    }
    if (data[i].day > highestDay) {
      highestDay = data[i].day
    }
  }
  //generateBoard
  var countStock = highestStock+2;
  var countDay = 1;
  var result = [];
  for (var j = 0; j < highestStock+3; j++) {
    var fillResult = [];
    for (var k = 0; k < highestDay+3; k++) {
      if (k == 0 && j != highestStock+2) {
        fillResult.push(String(countStock));
        countStock--;
      }
      else if (j == highestStock+2) {
        if (k === 0) {
          fillResult.push('x');
        }
        else{
          fillResult.push(String(countDay));
          countDay++;
        }
      }
      else {
        fillResult.push(' ');
      }
    }
    result.push(fillResult);
  }
  return result;
}

function generatePosition(data){
  var board = generateBoard(data);
  for (var i = 0; i < data.length; i++) {
    var indexX = data[i].day;
    var indexY = board[0][0] - data[i].stock;
    board[indexY][indexX] = '#';
  }
  return board;
}

function generateChart(data) {
  //your code here
  var board = generatePosition(data);
  var day = [];
  var stock = [];
  for (var i = 0; i < data.length; i++) {
    stock.push(data[i].stock);
    day.push(data[i].day);
  }
  var sortedDay = day.sort();
  var sortedStock = stock.sort();
  var subsStock = 100;
  var subsDay = 100;
  for (var j = 0; j < sortedStock.length-1; j++) {
    while (subsStock > 0) {
      if (sortedStock[j+1] > subsStock[j]) {
        
      }
    }
    for (var k = 0; k < sortedDay.length-1; k++) {
      while
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
