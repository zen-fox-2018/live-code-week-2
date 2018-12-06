class Audience {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.type = 'Regular';
  }
}

class Member extends Audience{
  constructor(name, email, age) {
    super(name, email, age)
    this.memberId = this.generateId();
    this.balance = 0;
    this.generateType();
  }

  topUp (balance) {
    if (balance >= 500) {
      this.balance += balance
      console.log(`Top Up balance ${balance} success`);
    } else {
      console.log(`Sorry, minimum amount is 500`);
    }
  }

  generateId() {
    let memberId = this.name.substring(0, 3) + this.age + Math.ceil(Math.random() * 20);
    return memberId;
  }

  generateType() {
    let type = ['Gold', 'Silver']
    this.type = type[Math.round(Math.random())];
  }
}

class NonMember extends Audience{
  constructor(name, email, age) {
    super(name, email, age)

  }
}


module.exports = {Member, NonMember};
