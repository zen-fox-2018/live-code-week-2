const { Member, NonMember } = require(`./Audience`)

class TheaterBroadway {
    constructor() {
        this.todayShow = null
        this.audiences = { VVIP: [], VIP: [], Regular: [] }
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow(name, price) {
        this.todayShow = name
        this.priceVVIP = price[0]
        this.priceVIP = price[1]
        this.priceRegular = price[2]
        return this
    }

    showAudience() {
        for (const key in this.audiences) {
            for (let i = 0; i < this.audiences[key].length; i++) {

            }
        }
    }

    buyTicket(audience, section, ticketCount) {
        const member = {
            Gold: [`VVIP`, `VIP`, `Regular`],
            Silver: [`VIP`, `Regular`]
        }

        switch (audience.type) {
            case `Gold`:
                // console.log(member[audience.type]);
                if (member[audience.type].indexOf(section) == -1) {
                    console.log(`We are sorry, this section only for gold member`);
                } else {
                    this.input(section, ticketCount, audience)
                    
                }
                break;

            case `Silver`:
                if (member[audience.type].indexOf(section) == -1) {
                    console.log(`We are sorry, this section only for gold member`);
                } else {
                    this.input(section, ticketCount, audience)
                    
                }
                break;

            default:
                section !== `Regular` ?
                    console.log(`With all due respect, section ${section} only for member`) :
                    this.input(section, ticketCount, audience)
                break;
        }
    }

    input(section, ticketCount, audience) {
        let price = 0
        for (var key in this.audiences) {
            if (section == key) {
                for (let i = 0; i < ticketCount; i++) {
                    this.audiences[key].push(audience)

                    switch (section) {
                        case `VVIP`:
                            price = this.priceVVIP
                            break;

                        case `VIP`:
                            price = this.priceVIP
                            break;

                        default:
                            price = this.priceRegular
                            break;
                    }
                }
            }
        }
        
        if (audience.type != `Regular`) {
            if (audience.balance - (ticketCount * price) < 0) {
                this.printSaldoKurang()
            } else {
                audience.balance -= (ticketCount * price)
                this.printInvoiceMember(section, ticketCount, audience, price, audience.balance, 20)
            }
        } else {
            this.printInvoiceNonMember(section, ticketCount, audience, price)
        }

    }

    printInvoiceMember(section, ticketCount, audience, price, balance, grandTotal) {
        console.log(`\n***************************** INVOICE *****************************`);
        console.log(`Theater Broadway                                   TICKET CONFIRMED`);
        console.log(`                            ${this.todayShow}              ${audience.memberId} (${audience.type})`);
        console.log(`*******************************************************************`);
        console.log(`Quantity     : ${ticketCount}                                                `);
        console.log(`Price        : ${price}                                            `);
        console.log(`Subtotal     : ${price * ticketCount}                                               `);
        console.log(`Balance      : ${balance}                                              `);
        console.log(`Grand Total  : ${grandTotal}                         REMAINING BALANCE                `);
    }

    printSaldoKurang() {
        console.log(`***************************** SALDO KURANG *****************************`);
    }

    printInvoiceNonMember(section, ticketCount, audience, price, balance, grandTotal) {
        console.log(`\n***************************** INVOICE *****************************`);
        console.log(`Theater Broadway                                   TICKET CONFIRMED`);
        console.log(`                            ${this.todayShow}              ${audience.name} (REGULAR)`);
        console.log(`*******************************************************************`);
        console.log(`Quantity     : ${ticketCount}                                                `);
        console.log(`Price        : ${price}                                            `);
        console.log(`Subtotal     : ${price * ticketCount}                                               `);
        console.log(`Grand Total  : ${grandTotal}                                         `);
    }
}

module.exports = { TheaterBroadway }