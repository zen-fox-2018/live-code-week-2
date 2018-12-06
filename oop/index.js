class Audience {
  constructor(name, email, age) {
    this.name = name
    this.email = email
    this.age = age
    this.type = 'Regular'
  }
}

class Member extends Audience {
  constructor(name, email, age) {
    super(name, email, age)
    this.memberId = this.generateMemberId()
    this.balance = 0
  }

  generateMemberId(){
    let output = ''
    output += this.name[0] + this.name[1] + this.name[2]
    output += 2018 - this.age
    output += Math.ceil(Math.random() * 20)
    if (Math.floor(Math.random() * 2) === 0) {
      this.type = 'Gold'
    } else {
      this.type = 'Silver'
    }

    return output
  }

  topUp(balance){
    if (balance < 500) {
      console.log('Sorry, minimum amount is 500');
    } else {
      this.balance += balance
    }
  }
}

class NonMember extends Audience {
  constructor(name, email, age) {
    super(name, email, age)
  }
}

class TheaterBroadway {
  constructor() {
    this.todayShow = null
    this.audiences = { "VVIP" : [], "VIP" : [], "Regular" : [] }
    this.priceVVIP = null
    this.priceVIP = null
    this.priceRegular = null
  }

  setTodayShow(show, price) {
    this.todayShow = show
    this.priceVVIP = price[0]
    this.priceVIP = price[1]
    this.priceRegular = price[2]
  }

  buyTicket(audience, section, num) {

  }

  showAudience(){
    console.log(`LIST AUDIENCE:`);

    for (let key in this.audiences) {
      // console.log(this.audiences[key].length);
      if (this.audiences[key][0] === undefined) {
        console.log(`-------------- ${key} --------------`)
        console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
      } else {
        console.log(`-------------- ${key} --------------`)
        for(let i = 0 ; i < this.audiences[key].length ; i++) {
          console.log(`${i+1}. ${this.audiences[key][i].name} (${this.audiences[key][i].type} member)`);
        }
      }
    }
  }
}

class Show {
  constructor(show, price){
    this.show = show
    this.
  }
}

let membertest = new NonMember('maman', 'rahman.hasri@gmail.com', 22)
let theaterPasar = new TheaterBroadway()

theaterPasar.showAudience()
// console.log(membertest);
