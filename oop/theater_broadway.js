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

    setTodayShow(showTitle, VVIPPrice, VIPPrice, RegularPrice) {
       this.todayShow = showTitle
       this.priceVVIP = VVIPPrice
       this.priceVIP = VIPPrice
       this.priceRegular = RegularPrice
    }

    addAudience(data, section) {
        //bikin kondisi di sini liat datanya, kalo dia non member cuma bisa beli regular
        // - Jika `Member` bertype silver ingin membeli section VVIP, keluarkan message "We are sorry, this section only for gold member"
        var sectionClass;
        if (section === 'VVIP') {
            sectionClass = this.audiences.VVIP
        } else if (section === 'VIP') {
            sectionClass = this.audiences.VIP
        } else {
            sectionClass = this.audiences.Regular
        }
        if (data.type === 'Regular') {
            if (section === 'VIP' || section === 'VVIP') {
                console.log(`With all due respect, section ${section} only for member`)
            } else {
                sectionClass.push(data)
            }
        } else if (data.type === 'Silver') {
            if (section === 'VVIP') {
                console.log(`We are sorry, this section only for gold member`)
            } else {
                sectionClass.push(data)
            }
        }
    }

    sectionList(section) {
        let list = ''
        let loopBasedOn;
        if (section === 'VVIP') {
            loopBasedOn = this.audiences.VVIP
        } else if (section === 'VIP') {
            loopBasedOn = this.audiences.VIP
        } else {
            loopBasedOn = this.audiences.Regular
        }
        for (let i = 0; i < loopBasedOn.length; i++) {
            list += `${i + 1}. ${loopBasedOn[i].name} (${loopBasedOn[i].type} member)`
            if (i !== loopBasedOn.length - 1) {
                list += '\n'
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

let theater = new Theater_Broadway()
theater.setTodayShow('Cintaku Di Atas Pohon', 200000, 150000, 100000)
let drewGuy = new Member('Drew Guy', 'dutdutsquirrel@kcn.com', 25, 1990)
let nathanMedina = new NonMember('Nathan Medina', 'NM@blucoats.com', 23, 1991)
let rue = new NonMember('Rue', 'NM@bluecoats.com', 16, 1998)
theater.addAudience(drewGuy, 'VVIP')
theater.addAudience(nathanMedina, 'Regular')
theater.addAudience(rue, 'Regular')
theater.showAudience()

module.exports = Theater_Broadway