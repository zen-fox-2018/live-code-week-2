class Audience {
    constructor(name, email, age, type){
        this.name = name
        this.email = email
        this.age = age
        this.type = type
    }
}

class Member extends Audience {
    constructor(balance){
        super(name, email, age, type)
        this.memberId = this.createMemberId(name,age)
        this.balance = 0
        this.type = this.memberType()    
    }

    createMemberId(name, age){
        let newId = ''
        let thisYear = new Date().getFullYear()
        let birthYear = thisYear - age
        newId = name[0][0] + name[0][1] + name[0][2] + birthYear + ~~(Math.random() * 20)
    }

    memberType(){
        const rand = Math.random() < 0.5
        let type = ''
        if (rand){
            type = 'Gold'
        }
        else {
            type = 'Silver'
        }
        return type
    }

    topUpBalance(amount) {
        if(amount < 500){
            
        }
    }

}

class NonMember extends Audience {
    constructor(){
        super(name,email,age,type)
    }
}

module.exports = {Audience, Member, NonMember}