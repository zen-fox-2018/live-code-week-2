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
    }

    setTodayShow(movie,pvvip,pvip,preg) {
        this.todayshow = movie
        this.priceVVIP = pvvip
        this.priceVIP = pvip
        this.priceRegular = preg
    }

    getAudienceList(){

    }
}

let razato1 = new Member('razato','email',27)
let razato2 = new Member('razato','email',27)

console.log(razato1);
console.log(razato2);


let a = new TheaterBroadway()
a.setTodayShow('Beranak Dalam Kubur',150000,10000,50000)
console.log(a);
