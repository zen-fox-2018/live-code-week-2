let Members = require("./Audience.js").Members;
class TheaterBroadway {
    constructor() {
        this.todayShow = null;
        this.audiences = { VVIP: [], VIP: [], Regular: [] };
        this.priceVVIP = null;
        this.priceVIP = null;
        this.priceRegular = null;
    }
    setTodayShow(show, VVIPPrice, VIPPrice, RegPrice) {
        this.todayShow = show;
        this.priceVVIP = VVIPPrice;
        this.priceVIP = VIPPrice;
        this.priceRegular = RegPrice;
    }
    showAudience() {
        let VVIP = "";
        let VIP = "";
        let reg = "";
        if (this.audiences.VVIP.length != 0) {
            for (let i = 0; i <= this.audiences.VVIP.length-1; i++) {
                VVIP += `${i+1}. ${this.audiences.VVIP[i]}`;
                if (i !== this.audiences.VVIP.length-1) {
                    VVIP += "\n"
                }
            }
        } else {
            VVIP = "THERE IS NO AUDIENCE IN THIS SECTION";
        }

        if (this.audiences.VIP.length != 0) {
            for (let i = 0; i <= this.audiences.VIP.length-1; i++) {
                VIP += `${i+1}. ${this.audiences.VIP[i]}`;
                if (i !== this.audiences.VVIP.length-1) {
                    VIP += "\n"
                }
            }
        } else {
            VIP = "THERE IS NO AUDIENCE IN THIS SECTION";
        }

       if (this.audiences.Regular.length != 0) {
            for (let i = 0; i <= this.audiences.Regular.length-1; i++) {
                reg += `${i+1}. ${this.audiences.Regular[i]}`;
                if (i !== this.audiences.Regular.length-1) {
                    reg += "\n"
                }
            }
        } else {
            reg = "THERE IS NO AUDIENCE IN THIS SECTION";
        }
        console.log("LIST AUDIENCE");
        console.log("-------------- VVIP---------------");
        console.log(VVIP);
        console.log("-------------- VIP----------------");
        console.log(VIP);
        console.log("-------------- Regular---------------");
        console.log(reg);
    }

    buyTickets(audience, section, totalTickets) {
        // console.log(audience, '===')
        if (audience.type === "Gold") {
            for (let i = 0; i < totalTickets; i++) {
                this.sectionCheck(section, audience.name, totalTickets)
            }
            console.log(this.invoice(audience.type, audience))
        } else if (audience.type === "Silver") {
            if (section === "VIP" || section === "Regular") {
                for (let i = 0; i < totalTickets; i++) {
                    this.sectionCheck(section, audience.name)
                }
                console.log(this.invoice(audience.type, audience, totalTickets))
            } else {
                console.log("We are sorry, this section only for gold member")
            }

        } else {
            if (section === "VIP" || section === "VVIP") {
                console.log(`With all due respect, section ${section} only for member`)
            } else {
                for (let i = 0; i < totalTickets; i++) {
                    this.sectionCheck(section, audience.name)
                }
                console.log(this.invoice(audience.type, audience, totalTickets))
            }
        }
    }
    sectionCheck(section, audience) {
        if (section === "VVIP") {
            this.audiences.VVIP.push(audience)
        } else if (section === "VIP") {
            this.audiences.VIP.push(audience);
        } else {
            this.audiences.Regular.push(audience);
        }
    }
    invoice(type, buyer, totalTickets) {
        if (type !== "Regular"){
            let price = this.findPrice()
        console.log(`  **************************INVOICE****************************
        Theater Broadway                             TICKET CONFIRMED
                             ${this.todayShow}      ${buyer.memberID} (${buyer.type})
        *************************************************************
        Quantity    : ${totalTickets}
        Price       : ${this.price}
        Sub Total   : 1500
        Balance     : 10000
        Grand Total : PAID BY BALANCE         Remaining Balance: 8500
        *************************************************************`);
        
        }
    }
    findPrice() {
        
    }
}

module.exports = TheaterBroadway;