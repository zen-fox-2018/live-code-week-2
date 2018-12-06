//AUDIENCE
class Audience {
  constructor(name, email, age){
    this.name = name;
    this.email = email;
    this.age = age;
    this.type = 'Non-Member';
  }
}

class Member extends Audience {
  constructor(name, email, age) {
    super(name, email, age);
    this.balance = 0;
    this.memberId = this.getMemberId();
    this.type = this.getType();
  }

  getType() {
    let random = Math.ceil(Math.random() * 2);
    if (random === 1) {
      var type = 'Gold';
    } else {
      var type = 'silver';
    }
    return type;
  }

  getMemberId() {
    let random = Math.floor(Math.random() * 20);
    let result = this.name.slice(0,3) + (2018 - this.age) + random;
    return result;
  }

  topUpBalance(uang) {
    if (uang < 500) {
      console.log(`Sorry, minimum amount is 500`);
    } else {
      this.balance += uang;
    }
  }
} 

class NonMember extends Audience {
  constructor(name, email, age) {
    super(name, email, age);
    this.type = 'non-member';
  }
}

class TheaterBroadway {
  constructor() {
    this.todayShow = null;
    this.Audience = {
      VVIP: [],
      VIP: [],
      regular: []
    }
    this.priceVIP = null;
    this.priceVVIP = null;
    this.priceRegular = null;
  }

  setTodayShow() {
    let showList = {
      show: 'The Book of Mormon',
      priceVVIP: 500,
      priceVIP: 700,
      priceRegular: 900
    }
  };

  showAudience(name) {
    let vvipMember = '';
    let vipMember = '';
    let regularMember = '';

    if  (name.type === 'gold') {
      
    }
  }
}


let there = new Member('Theresiacoa', 'theresia@gmail.com', 22);
let nickson = new Member('Nicksoncoa', 'nickson@gmail.com', 21);
let thania = new Member('Thaniacoa', 'thania@gmail.com', 19);
let elena = new NonMember('Elenacoa', 'elena@gmail.com', 17 );
console.log(there.topUpBalance(500));
// console.log(there);
// console.log(nickson);
// console.log(thania);
// console.log(elena);
console.log()