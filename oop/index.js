let Audience = require("./Audience.js").Audience;
let Members = require("./Audience.js").Members;
let Theater = require("./Theater.js")
let members = new Members();
let audience = new Audience();
Audience.addMember("celyn", "celyn.vy@gmail.com", 22);
console.log(members)