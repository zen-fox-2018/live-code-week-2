
const Member = require('./Audience.js').Member
const NonMember = require('./Audience').NonMember

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

Chris = new Member(chris)
Ari = new NonMember(ari)
Nunu = new NonMember(nunu)
Dede = new Member(dede)

console.log(Chris)
console.log(Ari);
console.log(Nunu);
console.log(Dede);

Chris.topUp(1500)
Dede.topUp(2000)
Chris.topUp(300)



