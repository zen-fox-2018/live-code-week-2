
const {Audience, Member, NonMember} = require("./audience-member");
const TheaterBroadway = require("./theaterbroadway")

const audience = new Audience();
const member = new Member();
const nonmember = new NonMember()
const theater = new TheaterBroadway()

console.log(theater.setTodayShow("The Book of Mormon", 1500, 1000, 500))

theater.showAudience(member)
theater.buyTicket(member)

// theater.showAudience(nonmember)

// console.log(member)

// console.log(blue)
// console.log("===============")
// console.log(nonmember)