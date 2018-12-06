class Theater_Broadway {
    constructor() {
        this._todayShow = null
        this._audiences = { VVIP: [], VIP: [], Regular: [] }
        this._priceVVIP = null
        this._priceVIP = null
        this._priceRegular = null
    }

    get audiences() {
        return this._audiences
    }

    get todayShow() {
        return this._todayShow
    }

    set todayShow(input) {
        this._todayShow = input
    }

    get priceVVIP() {
        return this._priceVVIP
    }

    set priceVVIP(input) {
        this._priceVVIP = input
    }

    get priceVIP() {
        return this._priceVIP
    }

    set priceVIP(input) {
        this._priceVIP = input
    }

    get priceRegular() {
        return this._priceRegular
    }

    set priceRegular(input) {
        this._priceRegular = input
    }

    // - Buatlah method setTodayShow yang berfungsi untuk mengubah judul todayShow, harga section VVIP, VIP dan Regular untuk judul todayShow tersebut
    setTodayShow(showTitle, VVIPPrice, VIPPrice, RegularPrice) {
       this.todayShow = showTitle
       this.priceVVIP = VVIPPrice
       this.priceVIP = VIPPrice
       this.priceRegular = RegularPrice
    }

    // - Buatlah method showAudience yang berfungsi untuk menampilkan list audience berdasarkan sectionnya. Jika pada section tersebut tidak memiliki audience maka tampilkan "THERE IS NO AUDIENCE IN THIS SECTION"
    showAudience(sect) {
        console.log(this.audiences.section)
        // if (this.audiences.VVIP.length === 0) {
        //     console.log(`THERE IS NO AUDIENCE IN THIS SECTION`)
        // }
    }
}

let theater = new Theater_Broadway()
theater.setTodayShow('Cintaku Di Atas Pohon', 200000, 150000, 100000)
theater.showAudience('VVIP')
// console.log(theater)

module.exports = Theater_Broadway


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