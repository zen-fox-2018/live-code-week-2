const Member = require('./member')
const NonMember = require('./nonmember')

const Theater = require('./theater')

let vene = new Member('venecia', 'cia@mail.com', 18, 1000) 
let zia = new Member('zia', 'zia@mail.com', 21, 500) 
let nonM = new NonMember('non', 'non@mail.com', 20) 


let broadway = new Theater('Broadway')
broadway.setTodayShow(`The book of Mormon` ,300, 200, 100)
// console.log(broadway)
// vene.topUp(500)
// console.log(vene)
broadway.buyTicket(vene, 'VIP', 3)
// console.log(vene) 
broadway.buyTicket(nonM, 'Regular' , 2 )
// console.log(zia)
// console.log(nonM)