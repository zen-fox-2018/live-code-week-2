class TheaterBroadway {
    constructor() {
        this._todayShow = null;
        this._audience = {VVIP:[],VIP:[],Reguler:[]};
        this._priceVVIP = null;
        this._priceVIP = null;
        this._priceReguler = null;
    }

    set todayShow(input) {
        this._todayShow = input
    }
    set VIP(input) {
        this._priceVIP = input
    }
    set VVIP(input) {
        this._priceVVIP = input
    }
    set Reguler(input) {
        this._priceReguler = input
    }
    SetTodayShow(Show, VVIP, VIP, Reguler) {
        this.todayShow = Show
        this.VIP = VIP
        this.VVIP = VVIP
        this.Reguler = Reguler
    }
    showAudience() {
        console.log('LIST AUDIENCE:')
        for (i in this._audience) {
            console.log(`-------------${i}----------`)
            if ( this._audience[i].length === 0 ) {
                console.log("THERE IS NO AUDIENCE IN THIS SECTION")
            } else {
                this._audience[i].forEach((element,j) => {
                    console.log(`${j+1}. ${elemen._name} (${element.type} member)`)
                });
            }
        }
    }

    buyTicket(audience, section, jumlah) {
       if (audience.constructor.name === "NonMember" && section !== "Reguler") {
         console.log(`With all due respect, section ${section} only for member`)
       } else if ( audience._type === "silver" && section === "VVIP") {
           console.log("We are sorry, this section only for gold member")
       } else {
           let total = null
           let price = null
           for ( let i = 0 ; i < jumlah ; i++) {
               this._audience[section].push(audience)
            }
           if (section === "VVIP") {
               price = this._priceVVIP
                total = jumlah*this._priceVVIP
            } else if (section === "VIP") {
                price = this._priceVIP
               total = jumlah*this._priceVIP
            } else if (section === "Reguler") {
                price = this._priceReguler
                total = jumlah*this._priceReguler
            }
            if (audience.constructor.name === "Member") {
                this.printInvoice(audience, section, jumlah, price, total)
                audience._balance -= total
            } else {
                this.printInvoice(audience, section, jumlah, price, total)
            }
         }
    }

    printInvoice(audience,jumlah,price, total) {
        console.log("********************* INVOICE **********************")
        console.log(`${this.constructor.name}           TICKET CONFIRMED`)
        if (audience.constructor.name === "Member") {
            console.log(`         ${this._todayShow}        ${audience._memberId} (${audience._type})`)
            console.log(`****************************************************`)
            console.log(`
            Quantity : ${jumlah}
            Price : ${price}      
            Sub Total : ${total}
            balance : ${audience._balance}
            Grand Total : PAID BY BALANCE                Remaining Balance: ${audience._balance - total}`)
            console.log(`************************************************`)
        } else {
            console.log(`         ${this._todayShow}        ${audience._name} (${audience._type})`)
            console.log(`****************************************************`)
            console.log(`
            Quantity : ${jumlah}
            Price : ${price}      
            Sub Total : ${total}
            Grand Total : ${total}                `)
            console.log(`************************************************`)

        }

    }
}

module.exports = TheaterBroadway
// **************************INVOICE****************************
//     Theater Broadway                             TICKET CONFIRMED
//                          The Book of Mormon      irs199220 (Gold)
//     *************************************************************
//     Quantity    : 3
//     Price       : 500
//     Sub Total   : 1500
//     Balance     : 10000
//     Grand Total : PAID BY BALANCE         Remaining Balance: 8500
//     *************************************************************