
const {Audience, Member, NonMember} = require("./audience-member");
const TheaterBroadway = require("./theaterbroadway")

const audience = new Audience();
const member = new Member();
const nonmember = new NonMember()

member.generateMemberId();
member.generateType();
console.log(member.topUp(10))

console.log(member)