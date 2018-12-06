const Audience = require('./Audience')

class NonMember extends Audience {
    constructor(name, email, age) {
        super(name, email, age)
    }
}

module.exports = NonMember