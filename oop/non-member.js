const Audience = require('./audience.js');

class NonMember extends Audience {
    constructor(name, email, age) {
        super(name, email, age)
    }
}

module.exports = NonMember