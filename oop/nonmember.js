const Audience = require('./audience') 

class NonMember extends Audience {
  contructor(name , email, age, type) {
    super(name, email, age, type)

  }
}

module.exports = NonMember