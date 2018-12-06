
class TypeMember {
    constructor(){
        this.typeMember = null
        this.balance = 0
    }
    
}

class Gold extends TypeMember{
    constructor(){
        super()
        this.typeMember = 'Gold'
    }
}

class Silver  extends TypeMember {
    constructor(){
        super()
        this.typeMember = 'Silver'
    }
}

module.exports = {Gold,Silver}