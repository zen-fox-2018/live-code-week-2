const Member = require('./Member')
const Audience = require('./Audience')

class TheaterBroadway{
    constructor() {
        this.todayShow = null
        this.audiences = {VVIP: [], VIP: [], Regular: []}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }
    setTodayShow(input, vvip, vip, regular) {
        this.todayShow = input
        this.priceVVIP = vvip
        this.priceVIP = vip
        this.priceRegular = regular 
    }

    showAudience() {
        let vvip = []
        let vip = []
        let regular = []
        if(this.audiences.vvip.length > 0) {
            for(let i = 0; i < this.audiences.vvip.legth; i++) {
                vvip.push(`${i+1}. ${this.audiences.vvip.name} (${this.audiences.vvip.type} member)`)
            }
            vvip.join('\n')
        } else {
            vvip = 'THERE IS NO AUDIENCE IN THIS SECTION'
        }

        if(this.audiences.vip.length > 0) {
            for(let i = 0; i < this.audiences.vip.legth; i++) {
                vip.push(`${i+1}. ${this.audiences.vip.name} (${this.audiences.vip.type} member)`)
            }
            vip.join('\n')
        } else {
            vip = 'THERE IS NO AUDIENCE IN THIS SECTION'
        }

        if(this.audiences.regular.length > 0) {
            for(let i = 0; i < this.audiences.regular.legth; i++) {
                regular.push(`${i+1}. ${this.audiences.regular.name} (${this.audiences.regular.type} member)`)
            }
            regular.join('\n')
        } else {
            regular = 'THERE IS NO AUDIENCE IN THIS SECTION'
        }

        console.log('LIST AUDIENCE')
        console.log('------------  VVIP   ------------')
        console.log(vvip)
        console.log('------------   VIP   ------------')
        console.log(vip)
        console.log('------------ REGULAR ------------')
        console.log(member)
    }

    buyTicket(audience, qty) {
        let vvip = false
        let vip = false
        let regular = false
        let priceVVIP = this.priceVVIP * qty
        let priceVIP = this.priceVIP * qty
        let priceRegular = this.priceRegular * qty

        if(audience.type === 'Gold') {
            vvip = true
            vip = true
            regular = true
        } else if(audience.type === 'Silver') {
            vvip = false
            vip = true
            regular = true
        } else if(audience.type === 'Regular') {
            vvip = false
            vip = false
            regular = true
        }

        //invoice
        if(audience.type === 'Gold' || audience.type === 'Silver') {

        } else if(audience.type === 'Reguler') {
            
        }
    }

    invoice() {
        console.log('********************INVOICE********************')
        console.log('***********************************************')
    }
}

let show = new TheaterBroadway()
show.setTodayShow('Bohemian Rhapsody', 75000, 50000, 35000)
console.log(show)

let januar = new Member('januar', 'januar@mail.com', 25)
let elis = new Member('elis', 'elis@mail.com', 24)
let agus = new Audience('agus', 'agus@mail.com', 26)
januar.topUp(10000)
elis.topUp(150000)

// console.log(januar)
// console.log(elis)
// console.log(agus)

show.buyTicket(januar, 2)
show.buyTicket(elis, 1)
show.buyTicket(agus, 3)

module.exports = TheaterBroadway