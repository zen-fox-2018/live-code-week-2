const Audience = require('./audience.js');

class Member extends Audience {
    constructor(name, email, age) {
        super(name, email, age)
        this.type = this.generateType();
        this.memberId = this.generateMember();
        this.balance = 0;
    }

    generateType() {
        const memberType = ['Gold', 'Silver'];

        for (let i = 0; i < memberType.length; i++) {
            let random = Math.round(Math.random());
            this.type = memberType[random];
        }
        return this.type;
    }

    generateMember() {
        let codeName = this.name.slice(0, 3).toLowerCase();
        let birthYear = new Date().getFullYear();
        let luckyNumber = Math.round(Math.random() * 20);

        return this.memberId = codeName + birthYear + luckyNumber;
    }

    topupBalance(amount) {

        if (amount < 500) {
            console.log('Sorry, minimum amount is 500');
        } else {
            this.balance = amount;
        }

    }
}

module.exports = Member;