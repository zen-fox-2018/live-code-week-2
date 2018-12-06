
const Member = require('./Audience.js').Member
const NonMember = require('./Audience').NonMember
const TheaterBroadway = require('./TheaterBroadway.js')

let chris = {
    name : 'Christian' , 
    email : 'christian.sihotang23@gmail.com',
    age : 23,
    type : 'Member'
}

let ari = {
    name : 'Ari' , 
    email : 'ari.dadang23@gmail.com',
    age : 21,
    type : 'Non-Member'
}

let nunu = {
    name : 'Nunu' , 
    email : 'nunu.nasa3@gmail.com',
    age : 19,
    type : 'Non-Member'
}


let dede = {
    name : 'Dede' , 
    email : 'dede.nasa3@gmail.com',
    age : 23,
    type : 'Member'
}

let Chris = new Member(chris)
let Ari = new NonMember(ari)
let Nunu = new NonMember(nunu)
let Dede = new Member(dede)

console.log(Chris)
console.log(Ari);
console.log(Nunu);
console.log(Dede);

Chris.topUp(1500)
Dede.topUp(2000)
Chris.topUp(300)

let Biskop21 = new TheaterBroadway()

Biskop21.setTodayShow('Black Dragon', 1000, 500 , 300)

console.log(Biskop21)
Biskop21.showAudience()
