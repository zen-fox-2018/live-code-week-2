const Member = require('./member.js');
const NonMember = require('./non-member.js');
const TheaterBroadway = require('./theater.js');

let arief = new Member('Arief Rachman', 'tmp@mail.com', 24);
arief.topupBalance(5000);
// console.log(arief);

let narji = new NonMember('Narji', 'narji@mail.com', 28);
// console.log(narji);

let theater = new TheaterBroadway();

theater.sectionSelection(arief);
theater.sectionSelection(narji);
theater.showAudience();