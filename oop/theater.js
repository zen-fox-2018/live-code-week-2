const Audiences = require('./audience.js');

class TheaterBroadway {
    constructor() {
        this.todayShow = null;
        this.audiences = { VVIP: [], VIP: [], Regular: [] };
        this.priceVVIP = null;
        this.priceVIP = null;
        this.priceRegular = null;
    }

    sectionSelection() {
        let dataAudience = new Audiences();

        if (dataAudience.type === 'Gold') {
            this.audiences.VVIP.push(dataAudience.name)
        } else if (dataAudience.type === 'Silver') {
            this.audiences.VIP.push(dataAudience.name)
        } else if (dataAudience.type === 'Regular') {
            this.audiences.Regular.push(dataAudience.name)
        }
    }

    movies() {

    }
}


module.exports = TheaterBroadway;