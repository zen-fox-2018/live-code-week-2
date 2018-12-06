const Audience = require('./audience') 

class Member extends Audience {
  constructor(name, email ,age , balance ) {
    super(name, email, age) 
    this.memberId = this.genMemId()
    this.balance = balance || 0
    this.type = this.genType()
  }

  genType() {
    let dic = ['gold', 'silver'] 
    return dic[Math.floor(Math.random()* dic.length)]
  }

  genMemId() {
    let date = new Date()
    return `${this.name.slice(0,3)}${date.getFullYear()- this.age}${Math.floor(Math.random()*20)}`
  }

  topUp(money) {
    if(money < 500) {
      console.log(`Sorry, minimum amount is 500`)
    } else {
      this.balance += money
      console.log(`Top up $${money} success`)
    }
  }
}

module.exports = Member