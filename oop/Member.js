const Audience = require('./Audience.js')

class Member extends Audience {
    constructor(name, email, age){
        super(name, email, age)
        this.memberId = this.createId()
        this.type = this.randomType()
        this.balance = 0
    }
    createId() {
        let letter = this.name.substring(0, 3)
        let tahun = 2018 - this.age
        let random = Math.floor(Math.random() * 20)
        let digit = ''
        if(random < 10) {
            digit += `0${random}`
        } else {
            digit = random
        }
        return `${letter}${tahun}${digit}`
    }
    randomType() {
        let type = ['Gold', 'Silver']
        return type[Math.round(Math.random() * 1)]
    }
    topUp(input) {
        if(input < 500) {
            console.log(`Sorry, minimum amount is 500`)
        } else if(input >= 500) {
            this.balance += input
        }
    }
}

module.exports = Member