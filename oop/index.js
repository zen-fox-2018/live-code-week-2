
const {Audience, Member, NonMember} = require("./audience-member");
const TheaterBroadway = require("./theaterbroadway")

const audience = new Audience();
const blue = new Member();
const nonmember = new NonMember()
const theater = new TheaterBroadway()

theater.showAudience(blue)
// console.log(blue)
// console.log("===============")
// console.log(nonmember)