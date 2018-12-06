//AUDIENCE
class Audience {
  constructor(name, email, age) {
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
      var type = 'gold';
    } else {
      var type = 'silver';
    }
    return type;
  }

  getMemberId() {
    let random = Math.floor(Math.random() * 20);
    let result = this.name.slice(0, 3) + (2018 - this.age) + random;
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

//THEATER BROADWAY
class TheaterBroadway {
  constructor(audienceArr) {
    this.todayShow = null;
    this.audienceList = {
      vvip: [],
      vip: [],
      regular: []
    }
    this.priceVVIP = null;
    this.priceVIP = null;
    this.priceRegular = null;

    this.audienceType(audienceArr);
  }

  audienceType(audienceArr) {
    for (let i = 0; i < audienceArr.length; i++) {
      if (audienceArr[i].type === 'gold') {
        this.audienceList.vvip.push(audienceArr[i].name);
      } else if (audienceArr[i].type === 'silver') {
        this.audienceList.vip.push(audienceArr[i].name);
      } else {
        this.audienceList.regular.push(audienceArr[i].name);
      }
    }
  }

  setTodayShow() {
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
        this.todayShow = 'The Book of Mormon';
        this.priceVVIP = 500;
        this.priceVIP = 700;
        this.priceRegular = 900;
    } else {
      this.todayShow = 'cat';
      this.priceVVIP = 400;
      this.priceVIP = 600;
      this.priceRegular = 800;
    }
  };

  showAudience() {
    let vvipMember = '';
    let vipMember = '';
    let regularMember = '';

    for (let i = 0; i < this.audienceList.vvip.length; i++) {
      vvipMember += `${i + 1}. ${this.audienceList.vvip[i]} (gold member)` + '\n';
    }
    for (let i = 0; i < this.audienceList.vip.length; i++) {
      vipMember += `${i + 1}. ${this.audienceList.vip[i]} (silver member)` + '\n';
    }
    for (let i = 0; i < this.audienceList.regular.length; i++) {
      regularMember += `${i + 1}. ${this.audienceList.regular[i]} (regular member)` + '\n';
    }

    if (vvipMember === '') {
      vvipMember = 'There is no audience in this section';
    }
    if (vipMember === '') {
      vipMember = 'There is no audience in this section';
    }
    if (regularMember === '') {
      regularMember = 'There is no audience in this section';
    }
    
    console.log('List Audience: ');
    console.log('-----------VVIP------------');
    console.log(vvipMember);
    console.log('-----------VIP-------------');
    console.log(vipMember);
    console.log('-----------Regular----------');
    console.log(regularMember);
  }

  buyTicket() {
    
  }
}


let there = new Member('Theresiacoa', 'theresia@gmail.com', 22);
let nickson = new Member('Nicksoncoa', 'nickson@gmail.com', 21);
let thania = new Member('Thaniacoa', 'thania@gmail.com', 19);
let elena = new NonMember('Elenacoa', 'elena@gmail.com', 17);
console.log(there.topUpBalance(500));
console.log(there);
console.log(nickson);
console.log(thania);
console.log(elena);
console.log('\n');

let audiences = new TheaterBroadway([there, nickson, thania, elena]);
audiences.showAudience();
// let audience2 = new TheaterBroadway(nickson);
// let audience3= new TheaterBroadway(thania);
// let audience4 = new TheaterBroadway(elena);
console.log(audiences);
