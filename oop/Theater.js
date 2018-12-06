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

    buyTicket(audience, section, qty) {
        var price = 0
        var subTotal = 0
        if(audience.type === 'Gold') {
            var grandTotal = ''
            var remainingBalance = null
            if(section === 'vvip') {
                price = this.priceVVIP
                subTotal = this.priceVVIP*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal += subTotal - this.balance
                    remainingBalance = 0
                }        
            } else if(section === 'vip') {
                price = this.priceVIP
                subTotal = this.priceVIP*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal = subTotal - this.balance
                    remainingBalance = 0
                }
            } else if(section === 'regular') {
                price = this.regular
                subTotal = this.priceRegular*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal += subTotal - this.balance
                    remainingBalance = 0
                }
            }
            console.log('********************INVOICE********************')
            console.log('Theater Broadway')
            console.log('CONFIRMED')
            console.log('TICKET')
            console.log(this.todayShow)
            console.log(audience.type)
            console.log(audience.memberId)
            console.log('***********************************************')
            console.log(`Quantity: ${qty}`)
            console.log(`Price: ${price}`)
            console.log(`Sub Total: ${subTotal}`)
            console.log(`Balance: ${audience.balance}`)
            console.log(`Grand Total: ${grandTotal}`)
            console.log(`Remaining Balance: ${remainingBalance}`)
            console.log('***********************************************')
        } else if(audience.type === 'Silver') {
            var grandTotal = ''
            var remainingBalance = null
            if(section === 'vvip') {
                console.log('We are sorry, this section only for Gold member')
            } else if(section === 'vip'){
                price = this.priceVIP
                subTotal = this.priceVIP*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal += subTotal - this.balance
                    remainingBalance = 0
                }
            } else if(section === 'regular') {
                price = this.regular
                subTotal = this.priceRegular*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal += subTotal - this.balance
                    remainingBalance = 0
                }
            }
            console.log('********************INVOICE********************')
            console.log('Theater Broadway')
            console.log('CONFIRMED')
            console.log('TICKET')
            console.log(this.todayShow)
            console.log(audience.type)
            console.log(audience.memberId)
            console.log('***********************************************')
            console.log(`Quantity: ${qty}`)
            console.log(`Price: ${price}`)
            console.log(`Sub Total: ${subTotal}`)
            console.log(`Balance: ${audience.balance}`)
            console.log(`Grand Total: ${grandTotal}`)
            console.log(`Remaining Balance: ${remainingBalance}`)
            console.log('***********************************************')
        } else if(audience.type === 'Regular') {
            var grandTotal = ''
            var remainingBalance = null
            if(section === 'vvip' || section === 'vip') {
                console.log(`With all due respect, section ${section} only for member`)
            } else if(section === 'regular') {
                price = this.regular
                subTotal = this.priceRegular*qty
                if(this.balance >= subTotal) {
                    grandTotal += 'PAID BY BALANCE'
                    remainingBalance = this.balance - subTotal
                } else {
                    grandTotal += subTotal - this.balance
                    remainingBalance = 0
                }
            }
            console.log('********************INVOICE********************')
            console.log('Theater Broadway')
            console.log('CONFIRMED')
            console.log('TICKET')
            console.log(this.todayShow)
            console.log(audience.type)
            console.log(audience.name)
            console.log('***********************************************')
            console.log(`Quantity: ${qty}`)
            console.log(`Price: ${price}`)
            console.log(`Sub Total: ${subTotal}`)
            console.log(`Grand Total: ${grandTotal}`)
            console.log('***********************************************')
        }

        // let grandTotal = null
        // let remainingBalance = null
        // if(this.balance >= subTotal) {
        //     grandTotal = 'PAID BY BALANCE'
        //     remainingBalance = this.balance - subTotal
        // } else {
        //     grandTotal = subTotal - this.balance
        //     remainingBalance = 0
        // }

        //invoice
        // if(audience.type === 'Gold' || audience.type === 'Silver') {
        //     console.log('Theater Broadway')
        //     console.log('CONFIRMED')
        //     console.log('TICKET')
        //     console.log(this.todayShow)
        //     console.log(audience.type)
        //     console.log(audience.memberId)
        //     console.log('********************INVOICE********************')
        //     console.log(`Quantity: ${qty}`)
        //     console.log(`Price: ${price}`)
        //     console.log(`Price: ${subTotal}`)
        //     console.log(`Price: ${audience.balance}`)
        //     console.log(`Grand Total: ${grandTotal}`)
        //     console.log(`Remaining Balance: ${remainingBalance}`)
        //     console.log('***********************************************')
        // } else if(audience.type === 'Reguler') {
        //     console.log('********************INVOICE********************')
        //     console.log('Theater Broadway')
        //     console.log('CONFIRMED')
        //     console.log('TICKET')
        //     console.log(this.todayShow)
        //     console.log(audience.type)
        //     console.log(audience.memberId)
        //     console.log('***********************************************')
        //     console.log(`Quantity: ${qty}`)
        //     console.log(`Price: ${price}`)
        //     console.log(`Price: ${subTotal}`)
        //     console.log(`Price: ${audience.balance}`)
        //     console.log(`Grand Total: ${grandTotal}`)
        //     console.log('***********************************************')
        // }
    }
}

let show = new TheaterBroadway()
show.setTodayShow('Bohemian Rhapsody', 75000, 50000, 35000)
// console.log(show)

let januar = new Member('januar', 'januar@mail.com', 25)
let elis = new Member('elis', 'elis@mail.com', 24)
let agus = new Audience('agus', 'agus@mail.com', 26)
januar.topUp(10000)
elis.topUp(150000)

// console.log(januar)
// console.log(elis)
// console.log(agus)

show.buyTicket(januar, 'vvip', 2)
// show.buyTicket(elis, 'vip', 1)
// show.buyTicket(agus, 'regular', 3)

module.exports = TheaterBroadway