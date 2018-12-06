let Audience = require("./Audience.js").Audience;
let Members = require("./Audience.js").Members;
let NonMembers = require("./Audience.js").NonMembers;
let Theater = require("./Theater.js")
let celyn = new Members("celyn", "celyn@gmail.com", 22);
celyn.topUp(1000);
celyn.topUp(200);
console.log(celyn)
let theaterBroadway = new Theater()
theaterBroadway.buyTickets(celyn, "VIP", 2);
console.log(theaterBroadway.showAudience())
//