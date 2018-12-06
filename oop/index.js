/*
class:
-Audience
-Member & Nonmember (extend Audience)
-Theater Broadway

COMPOSITION ==> KARENA ASUMSI ADA THEATER LAIN SELAIN BROADWAY DISINI
*/

const { Member, NonMember } = require(`./Audience`)
const { TheaterBroadway } = require(`./TheaterBroadway`)
console.clear()

//RELEASE 0
console.log(`\nRELEASE 0 ==================================================\n`);
let taqi = new Member(`taqi`, `taqi@mail.com`, 22, 50000)
let susan = new Member(`susan`, `john@mail.com`, 32, 400000)
let john = new NonMember(`john`, `susan@mail.com`, 28, `Regular`)
console.log(taqi);
console.log(susan);
console.log(john);

//RELEASE 1
console.log(`\nRELEASE 1 ====================================================\n`);
console.log(taqi.topUp(20000));

//RELEASE 2
let broadway = new TheaterBroadway()
console.log(broadway.setTodayShow(`Jumanji`, [50000, 40000, 20000]));
broadway.showAudience()

//RELEASE 3
console.log(`\nRELEASE 3 ====================================================\n`);
broadway.buyTicket(taqi, `VVIP`, 1)
broadway.buyTicket(susan, `Regular`, 20)
broadway.buyTicket(john,`Regular`, 1)


