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
        this.memberID = this.addId();
        this.balance = 0;
        this.type = this.addType();
    }
    addId() {
        let randomNum = Math.round(Math.random()* 20);
        let birthYear = 2018 - this.age;
        let theId = this.name.slice(0, 3) + birthYear + randomNum;
        return theId
       
    }
    addType() {
        let type = ["Silver", "Gold"];
        let randomIndex = Math.round(Math.random() * 1);
        return type[randomIndex];
    }
    topUp(amount) {
        if (amount < 500) {
            console.log(`Sorry, minimum amount is 500`)
        } else {
            this.balance += amount;
        }
    }
}
class NonMembers extends Audience {
    constructor() {
        super(name, email, age);
    }
}
module.exports = {Audience, Members, NonMembers};