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
        for (let i = 0; i <= this)
        console.log("LIST AUDIENCE");
        console.log("-------------- VVIP---------------");
        console.log("-------------- VIP----------------");
        console.log("-------------- Regular---------------");
    }
}

module.exports = TheaterBroadway;