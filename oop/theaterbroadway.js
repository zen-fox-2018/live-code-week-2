
class TheaterBroadway {
    constructor(todayShow, audiences, priceVVIP, priceVIP, priceRegular) {
        this.todayShow = todayShow;
        this.audiences = audiences;
        this.priceVVIP = priceVVIP;
        this.priceVIP = priceVIP;
        this.priceRegular = priceRegular;     
    }

    buyTicket() {
        
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