class Audience {
    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
        this.type = 'Regular'
    }
}

class Member extends Audience {
    constructor(name, email, age, birthYear) {
        super(name, email, age)
        this._memberId = ''
        this.balance = 0
        this.birthYear = birthYear
        this.setTypeMember()
        this.generate_memberId()
    }

    get memberId() {
        return this._memberId
    }

    set memberId(input) {
        this._memberId = input
    }

    setTypeMember() {
        let catMember = ['gold', 'silver']
        let randomizeCatMember = catMember[Math.floor(Math.random() * catMember.length)]
        this.type = randomizeCatMember
    }

    generate_memberId() {
        let randomId = Math.floor(Math.random() * 20) + 1
        this.memberId = `${this.name.substring(0, 3)}${this.birthYear}${randomId}`
    }

    topUpBalance(amount) {
        if (amount < 500) {
            console.log(`Sorry, minimum amount is 500`)
        }
        else {
            this.balance += amount
        }
    }
}

class NonMember extends Audience {
    constructor() {
        super()
    }
}

let newMember = new Member('Mahdi', 'mahdihrs@yahoo.com', 23, 1994)
newMember.topUpBalance(600)
newMember.topUpBalance(600)
console.log(newMember);


module.exports = {Audience, Member, NonMember}