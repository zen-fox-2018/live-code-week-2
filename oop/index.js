/*
class:
-Audience
-Member & Nonmember (extend Audience)
-Theater Broadway


*/

const { Member, NonMember } = require(`./Audience`)

//RELEASE 0
let taqi = new Member(`taqi`, `taqi_sting@hotmail.com`, 22, `Regular`, 2, 20000)
console.log(taqi);

//RELEASE 1
taqi.topUp(200)

