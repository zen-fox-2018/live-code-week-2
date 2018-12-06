const Audience = require('./Audience')

class Member extends Audience {
    constructor(name, email, age, balance) {
        super(name, email, age) 
        this._type = this.getType();
        this._memberId = this.getId();
        this._balance = balance || 0
        
    }

    set balance(num) {
        this._balance += num
    }
    getId() {
        let id = ""
        let tahunlahir = 2018 - this._age
        id = id + this._name[0] + this._name[1] + this._name[2] + tahunlahir +Math.floor(Math.random() * 20 +1) 
        return id
    }

    getType() {
        let type = ["gold","silver"]
        let random = Math.floor(Math.random() * type.length)
        return type[random]
    }

    topUp(money) {
        if (money < 500 ) {
            console.log(`Sorry, minimum amount is 500`) 
        } else {
            this.balance = money
            console.log( `anda berhasil topup sebesar ${money}`)
        }
    }
}

module.exports = Member