const {Member, NonMember} = require ('./audience.js');
const TheaterBroadway = require ('./theater.js');

let irsyah = new Member('Irsyah M', 'icha@hacktiv8.com', 1992);
let herman = new NonMember('Herman Y', 'hermanboy53@gmail.com', 1993);
let theaterBroadway = new TheaterBroadway();
irsyah.topUp(10000);
console.log(irsyah);
console.log(herman);
theaterBroadway.setTodayShow('The Book of Mormon', 1500, 1000, 500)
theaterBroadway.buyTicket(herman, 'Regular', 3);
theaterBroadway.buyTicket(irsyah, 'VIP', 9);
theaterBroadway.showAudience();
