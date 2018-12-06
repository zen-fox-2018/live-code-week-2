const Gold = require('./TypeMember.js').Gold
const Silver = require('./TypeMember.js').Silver

class Audience {
    constructor(obj){
        this.name = obj['name']
        this.email = obj['email']
        this.age = obj['age']
        this.tahunLahir = 2018 - this.age
        this.type = null
    }   
}

class Member extends Audience {
    constructor(obj){
        super(obj)
        this.type = this.getTypeMember()
        this.memberId = this.getMemberID()
    }

    topUp(amount) {
        if(amount <= 500){
            return console.log('Sorry, minimum amount is 500');
        } 
        this.type.balance += amount
        console.log((`${this.name} Success top up ${amount}`));
        

    }

    getMemberID(){
        let id = ''
        let randomAngka = ~~(Math.random() * 20) + 1
        id = this.name[0] + String(this.tahunLahir) + String(randomAngka)
        // console.log(id)
        return id
    }

    getTypeMember(){
        
       let getRandom = ~~(Math.random()*2 ) 
       if(getRandom == 0){
            this.type = new Gold()
       } else{
           this.type = new Silver()
       }
       return this.type
    }
}

class NonMember extends Audience {
    constructor(obj){
        super(obj)
        this.type = 'Reguler'
    }
}

module.exports = {Member , NonMember}