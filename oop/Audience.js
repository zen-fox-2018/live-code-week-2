class Audience {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.type = "Regular";
    }
}
class Members extends Audience {
    constructor(name, email, age) {
        super(name, email, age);
        this.memberID = "";
        this.balance = 0;
    }
    addMember(name, email, age) {
        
        let type = ["Silver", "Gold"];
        let randomIndex = Math.round(Math.random() * 1);
        let randomNum = Math.round(Math.random()* 20);
        let birthYear = 2018 - age;
        let theId = name.slice(0, 3) + birthYear + randomNum;
        this.type = type[randomIndex]
        this.memberID = theId;
    }
    topUp(amount) {
        if (amount < 500) {
            console.log(`Sorry, minimum amount is 500`)
        } else {
            this.balance = amount;
        }
    }
}
class NonMember extends Audience {
    constructor() {
        super(name, email, age);
    }
}
module.exports = {Audience, Members, NonMember};