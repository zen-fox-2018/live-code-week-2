const {Member, NonMember} = require ('./audience.js');
const TheaterBroadway = require ('./theater.js');

let irsyah = new Member('Irsyah M', 'icha@hacktiv8.com', 17);
let theaterBroadway = new TheaterBroadway();
irsyah.topUp(500);
console.log(irsyah);
console.log(theaterBroadway);
