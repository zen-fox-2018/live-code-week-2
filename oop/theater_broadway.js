const Audience = require('./audience').Audience
const Member = require('./audience').Member
const NonMember = require('./audience').NonMember

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

    addAudience(data, section) {
        //bikin kondisi di sini liat datanya, kalo dia non member cuma bisa beli regular
        if (section === 'VVIP') {
            this.audiences.VVIP.push(data)
        } else if (section === 'VIP') {
            this.audiences.VIP.push(data)
        } else {
            this.audiences.Regular.push(data)
        }
    }

    sectionList(section) {
        let list = ''
        if (section === 'VVIP') {
            for (let i = 0; i < this.audiences.VVIP.length; i++) {
                list += `${i + 1}. ${this.audiences.VVIP[i].name} (${this.audiences.VVIP[i].type} member)`
                if (i !== this.audiences.VVIP.length - 1) {
                    list += '\n'
                }
            }
        }
        else if (section === 'VIP') {
            for (let i = 0; i < this.audiences.VIP.length; i++) {
                list += `${i + 1}. ${this.audiences.VIP[i].name} (${this.audiences.VIP[i].type} member)`
                if (i !== this.audiences.VIP.length - 1) {
                    list += '\n'
                }
            }
        }
        else {
            for (let i = 0; i < this.audiences.Regular.length; i++) {
                list += `${i + 1}. ${this.audiences.Regular[i].name} (${this.audiences.Regular[i].type} member)`
                if (i !== this.audiences.Regular.length - 1) {
                    list += '\n'
                }
            }
        }
        return list
    }

    showAudience() {
        let VVIP;
        let VIP;
        let Regular;
        if (this.audiences.VVIP.length === 0) {
            VVIP = `THERE IS NO AUDIENCE IN THIS SECTION`
        } else {
            VVIP = this.sectionList('VVIP')
        } 
        if (this.audiences.VIP.length === 0) {
            VIP = `THERE IS NO AUDIENCE IN THIS SECTION`
        } else {
            VIP = this.sectionList('VIP')
        }
        if (this.audiences.Regular.length === 0) {
            Regular = `THERE IS NO AUDIENCE IN THIS SECTION`
        } else {
            Regular = this.sectionList('Regular')
        }
        console.log('LIST AUDIENCE:')
        console.log('-------------- VVIP---------------')
        console.log(VVIP)
        console.log('-------------- VIP---------------')
        console.log(VIP)
        console.log('-------------- Regular---------------')
        console.log(Regular)
    }
}

// LIST AUDIENCE:
// -------------- VVIP---------------
// 1. irsyah (gold member)
// 2. irsyah (gold member)
// -------------- VIP---------------
// THERE IS NO AUDIENCE IN THIS SECTION
// -------------- Regular---------------
// 1. rama (regular member)

let theater = new Theater_Broadway()
theater.setTodayShow('Cintaku Di Atas Pohon', 200000, 150000, 100000)
let drewGuy = new Member('Drew Guy', 'dutdutsquirrel@kcn.com', 25, 1990)
let nathanMedina = new NonMember('Nathan Medina', 'NM@blucoats.com', 23, 1991)
theater.addAudience(drewGuy, 'VVIP')
theater.addAudience(nathanMedina, 'Regular')

// console.log(theater)
theater.showAudience()

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