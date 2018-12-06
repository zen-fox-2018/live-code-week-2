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
                    console.log(`sukses beli`);
                    
                }
                break;

            case `Silver`:
                if (member[audience.type].indexOf(section) == -1) {
                    console.log(`We are sorry, this section only for gold member`);
                } else {
                    console.log(`sukses beli`);
                }
                break;
            
            default:
                section !== `Regular`
                break;
        }

    }
}

module.exports = { TheaterBroadway }