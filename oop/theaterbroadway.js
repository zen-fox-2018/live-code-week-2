
class TheaterBroadway {
    constructor(todayShow, priceVVIP, priceVIP, priceRegular) {
        this.todayShow = null;
        this.audiences = { VVIP: [], VIP: [], Regular: [] };
        this.priceVVIP = null;
        this.priceVIP = null;
        this.priceRegular = null;     
    }

    buyTicket(data) {
        console.log(data)
    }

    setTodayShow(showName, priceVVIP, priceVIP, priceRegular) {
        this.todayShow = showName;
        this.priceVVIP = priceVVIP;
        this.priceVIP = priceVIP;
        this.priceRegular = priceRegular;
    }

    showAudience(input) {
        if(input.type === "GOLD") {
            this.audiences.VVIP.push(input.name)
        } else if (input.type === "SILVER") {
            this.audiences.VIP.push(input.name)
        } else if (input.type === "Regular") {
            this.audiences.Regular.push(input.name)
        }

        console.log("List of Audience: ")
        console.log("===================")
        if(this.audiences.VVIP.length !== 0 && this.audiences.VIP.length !== 0) {
            // if(this.audiences.VVIP) {
                console.log("--------VVIP -------")
                console.log(this.audiences.VVIP[0])
            // }
        } else {
            return "There is no audience in this section"
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