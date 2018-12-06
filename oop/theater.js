class TheaterBroadway {
    constructor() {
        this.todayShow = null;
        this.audiences = { VVIP: [], VIP: [], Regular: [] };
        this.priceVVIP = null;
        this.priceVIP = null;
        this.priceRegular = null;
        this.tmp = this.sectionSelection()
    }

    sectionSelection(data) {
        if (data.type === 'Gold') {
            this.audiences.VVIP.push(data.name);
        } else if (data.type === 'Silver') {
            typeMember.Gold = data.name
        } else if (data.type === 'Regular') {
            this.audiences.Regular.push(data.name);
        }
    }

    movies() {

    }

    showAudience() {

        console.log(`LIST AUDIENCE:\n`)

        for (let i in this.audiences) {
            if (!this.audiences[i].length) {
                console.log(`-------------- ${i} --------------`)
                console.log('THERE IS NO AUDIENCE IN THIS SECTION');
            } else {
                console.log(`-------------- ${i} --------------`)
                console.log(`${this.audiences[i].length}. ${this.audiences[i]}`)
            }
        }
    }

    buyTicket() {

    }
}

module.exports = TheaterBroadway;