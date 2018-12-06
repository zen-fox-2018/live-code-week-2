
class TypeMember {
    constructor(){
        this.typeMember = 'Regular'
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
class Regular extends TypeMember {

}

module.exports = {Gold,Silver,Regular}