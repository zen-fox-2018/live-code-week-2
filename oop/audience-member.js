
class Audience {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.type = "Regular";
    }
}

class Member extends Audience {
    constructor() {
        super("blue", "violet@mail.com", 22)
        this.type = this.generateType()
        this.memberId = this.generateMemberId();
        this.balance = 0
    }

    generateMemberId() {
        let random = Math.floor(Math.random()*20) + 1;
        let birthdate = 2018 - this.age;

        let firstThreeLetter = this.name.substring(0, 3);

        return `${firstThreeLetter}${birthdate}${random}`
    }

    generateType() {
        let type = ["GOLD", "SILVER"];
        let randomType = type[Math.floor(Math.random()*type.length)];

        return randomType
    }

    topUp(number) {
        if(number < 500) {
            return "Sorry, minimum amount is 500"
        } else {
            this.balance += number
        }
    }
}

class NonMember extends Audience {
    constructor() {
        super()
    }
}

// - Value property memberId yang terdapat pada `Member` akan ter-generate secara otomatis dimana formatnya adalah `3 huruf pertama dari name + tahun lahir + angkaRandom dari 1-20`
//  saat `Member` terbuat/terbentuk.

module.exports = {
    Audience, 
    Member,
    NonMember
}