const Audience = require('./audience.js');
const Member = require('./member.js');
const NonMember = require('./non-member.js');

let someone = new Member('Arief Rachman', 'tmp@mail.com', 24);
someone.topupBalance(5000);

let someoneA = new NonMember('Biskuit Roma', 'biskuit@mail.com', 24);
console.log(someoneA);