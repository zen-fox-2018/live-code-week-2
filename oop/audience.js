class Audience {
  constructor(name , email , age , type) {
    this.name = name 
    this.email = email 
    this.age = age 
    this.type = type || 'Regular'
  }
}

module.exports = Audience