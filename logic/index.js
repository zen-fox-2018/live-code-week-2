function generateChart(data) {
  let kotakLuar = []
  let minX = 1
  let maxX = 1
  let minY = 1
  let maxY = 1
  let arrayKoordinat = []
  for(let i = 0; i < data.length; i++){
    if(data[i].stock > maxY) {
      maxY = data[i].stock + 2
    }
    if(data[i].day > maxX) {
      maxX = data[i].day + 2
    }
    arrayKoordinat.push([data[i].day, data[i].stock])
  }
  console.log(arrayKoordinat)
  //buat grafik
  let isiY = maxX
  for(let i = 0; i < maxX; i++ ){
    let kotakDalam = []
    let isi= 0
    isiY--
    for(let j = 0; j < maxY + 2; j++){
            
      if( i === maxX-1 && j > 0) {        
        isi++
        kotakDalam.push(String(isi))
      }
      else if(i === maxX -1 && j === 0){
        kotakDalam.push('x')
      }
      else if (j === 0 && i < maxX -1){
        
        kotakDalam.push(String(isiY))
      }
      else {
        isi = ' '
        kotakDalam.push(String(isi))
      }
    }
        
    kotakLuar.push(kotakDalam)
  }
  for(let k = 0; k < arrayKoordinat.length; k++){
    posisiDay = arrayKoordinat[k][0]
    posisiStock = arrayKoordinat[k][1]
    kotakLuar[posisiStock][posisiDay] = '#'
  }
  //release 2
  for(let i = 0; i < kotakLuar.length; i++){
    for(let j = 0; j < kotakLuar[i].length; j++){
      
    }
  }

  console.log(kotakLuar)
  
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
