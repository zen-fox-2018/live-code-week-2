class Audience{
    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
        this.type = 'Regular'
    }
}

class NonMember extends Audience{
    constructor(){
        super()
    }
}

module.exports = Audience