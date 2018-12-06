class Audience {
    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
        this.type = 'Regular'
    }
}

class Member extends Audience {
    constructor(name, email, age) {
        super(name, email, age)
        this.type = this.memberType()
        this.memberId = this.createID(name, age)
        this.balance = 0
    }

    createID(name, age) {
        let id = ''
        let getName = ''

        for (let i = 0; i < 3; i++) {
            getName += name[i]
        }

        let year = new Date().getFullYear()
        id = getName + (year - age) + (Math.floor(Math.random() * 20))
        return id
    }

    memberType() {
        let type = ''
        let random = Math.round(Math.random())

        if (random < 1) {
            type = 'Gold'
        } else {
            type = 'Silver'
        }

        return type
    }

    topUp(num) {
        let balance = 0
        if (num < 500) {
            console.log('Sorry, minimum amount is 500')
        } else {
            balance = num
        }
        this.balance = balance
    }


}

class NonMember extends Audience {
    constructor(name, email, age) {
        super(name, email, age)
    }
}

module.exports = { Audience,Member,NonMember }

let a = new Member('rama', 'hektiv', 22)
let b = new NonMember('icha', 'hektiv', 25)

console.log(a, 'before top up');
// console.log(b);

a.topUp(100)

console.log(a, 'after top up');

// function penonton(params) {
//     let = 
// }

console.log(a.constructor.name)