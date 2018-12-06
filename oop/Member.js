const Audience = require('./Audience.js')

class Member extends Audience {
    constructor(name,email,age,type) {
        super(name,email,age,type)
        this.memberId = this.generateId()
    }
 
    
}
