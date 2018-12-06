
class TheaterBroadway {
    constructor(todayShow, audiences, priceVVIP, priceVIP, priceRegular) {
        this.todayShow = null;
        this.audiences = { VVIP: [], VIP: [], Regular: [] };
        this.priceVVIP = null;
        this.priceVIP = null;
        this.priceRegular = null;     
    }

    buyTicket() {

    }

    setTodayShow() {

    }

    showAudience(input) {
        if(input.type === "GOLD") {
            this.audiences.VVIP.push(input.name)
        } else if (input.type === "SILVER") {
            this.audiences.VIP.push(input.name)
        }
    }
}

module.exports = TheaterBroadway

// 2. `Theater Broadway` hanya menampilkan satu pertunjukan saja setiap harinya dan memiliki
//    3 macam section yaitu VVIP, VIP dan Regular

//    - `Member` yang bertype gold dapat membeli semua section
//    - `Member` yang bertype silver hanya dapat membeli section VIP dan Regular
//    - `NonMember` hanya dapat membeli section Regular


// 3. `Theater Broadway` memiliki attribute:
//     - todayShow
//     - audiences
//     - priceVVIP
//     - priceVIP
//     - priceRegular