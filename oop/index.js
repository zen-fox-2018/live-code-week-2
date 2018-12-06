const Audience = require('./audience.js').Audience
const Member = require('./audience.js').Member
const NonMember = require('./audience.js').NonMember

class TheaterBroadway {
    constructor() {
        this.todayshow = null
        this.audiences = { VVIP: [], VIP: [], Regular: [] }
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
        // this.showAudience(this.audiences)
    }

    setTodayShow(movie,pvvip,pvip,preg) {
        this.todayshow = movie
        this.priceVVIP = pvvip
        this.priceVIP = pvip
        this.priceRegular = preg
    }

    // getAudienceList(type){
    //     if(type == 'Gold') {
    //         this.audiences.VVIP.push(Member.name)
    //     } else if (type == 'Silver') {
    //         this.audiences.VIP.push(Member.name)
    //     } else {
    //         this.audiences.Regular.push(Member.name)
    //     }
    // }

    // showAudience(audience){
    //     if (audience.VVIP.length > 0) {
    //         console.log('yes')
    //     } else {
    //         console.log('no')
    //     }
    // }
}

module.exports = TheaterBroadway

let razato1 = new Member('razato','email',27)
let razato2 = new Member('razato','email',27)

console.log(razato1);
console.log(razato2);


let a = new TheaterBroadway()
a.setTodayShow('Beranak Dalam Kubur',150000,10000,50000)
// a.showAudience()
console.log(a);
