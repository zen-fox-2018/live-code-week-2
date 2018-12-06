
class Audience {
    constructor(obj){
        this.name = obj['name']
        this.email = obj['email']
        this.age = obj['age']
        this.type = obj['type']
    }   
    

}



class Member extends Audience {
    constructor(obj){
        super(obj)

    }
}

class NonMember extends Audience {
    constructor(obj){
        super(obj)

    }
}

module.exports = {Member , NonMember}