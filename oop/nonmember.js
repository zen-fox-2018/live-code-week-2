const Audience = require('./audience') 

class NonMember extends Audience {
  constructor(name , email, age) {
    super(name, email, age)
  }
}

module.exports = NonMember