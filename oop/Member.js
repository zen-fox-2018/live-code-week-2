const Audience = require('./Audience.js')

class Member extends Audience {
    constructor(){
        super()
        this.memberId = this.createId()
        this.balance = this.randomType()
    }
    createId() {
        let letter = this.name.substring(0, 3)
        let tahun = 2018 - this.age
        let random = Math.floor(Math.random() * 20)
        this.memberId = `${letter}${tahun}${random}`
    }
    randomType() {
        let type = ['Gold', 'Silver']
        return type[Math.round(Math.random() * 1)]
    }
}

module.exports = Member