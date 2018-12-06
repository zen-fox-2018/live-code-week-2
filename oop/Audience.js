class Audience {
    constructor(name, email, age, type) {
        this.name = name
        this.email = email
        this.age = age
        this.type = type || `Regular`
    }

    topUp(nominal) {
        const minimalTopup = 500
        if (nominal < minimalTopup) return `Sorry, minimum amount is 500`

        
    }
}

class Member extends Audience {
    constructor(name, email, age, balance) {
        super(name, email, age)
        this.memberId = this.makeMemberId()
        this.balance = balance || 0
    }

    makeMemberId() {
        return `${this.name[0] + this.name[1] + this.name[2]}${new Date().getFullYear() - this.age}${Math.round(Math.random() * 20)}`
    }
}

class NonMember extends Audience {
    constructor(name, email, age, type, memberId, balance) {
        super(name, email, age, type, memberId, balance)
    }
}

module.exports = { Member, NonMember }