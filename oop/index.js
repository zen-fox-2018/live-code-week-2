class TheaterBroadway {
  constructor() {
    this.todayShow = null
    this.audiences = { VVIP: [], VIP: [], Regular: [] }
    this.priceVVIP = null
    this.priceVIP = null
    this.priceRegular = null
  }

  setTodayShow(todayShow, priceVVIP, priceVIP, priceRegular) {
    this.todayShow = todayShow
    this.priceVVIP = priceVVIP
    this.priceVIP = priceVIP
    this.priceRegular = priceRegular
  }

  showAudience() {
    `LIST AUDIENCE:
    -------------- VVIP---------------
    1. irsyah (gold member)
    2. irsyah (gold member)
    -------------- VIP---------------
    THERE IS NO AUDIENCE IN THIS SECTION
    -------------- Regular---------------
    1. rama (regular member)`
    console.log(`LIST AUDIENCE:`);
    console.log(`-------------- VVIP---------------`);
    if (this.audiences.VVIP.length === 0) {
      console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
    }
    for (let i = 0; i < this.audiences.VVIP.length; i++) {
      console.log(`${i+1}. ${this.audiences.VVIP[i].name} (gold member)`);
    }

    console.log(`-------------- VIP---------------`);
    if (this.audiences.VIP.length === 0) {
      console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
    }
    for (let i = 0; i < this.audiences.VIP.length; i++) {
      console.log(`${i+1}. ${this.audiences.VIP[i].name}`);
    }

    console.log(`-------------- Regular---------------`);
    if (this.audiences.Regular.length === 0) {
      console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
    }
    for (let i = 0; i < this.audiences.Regular.length; i++) {
      console.log(`${i+1}. ${this.audiences.VIP[i].name}`);
    }
  }
}

class Audience {
  constructor(name, email, age) {
    this.name = name
    this.email = email
    this.age = age
    this.type = "Regular"
    this.randomType()
  }
}

class Member extends Audience {
  constructor(name, email, age) {
    super(name, email, age)
    this.memberId = this.generateMemberId()
    this.balance = 0
  }

  generateMemberId() {
    let first3Char = this.name[0]+this.name[1]+this.name[2]
    let yearNow = new Date().getFullYear()
    let yearBirth = yearNow - this.age
    let random = Math.floor(Math.random()*20 + 1)
    return first3Char+String(yearBirth)+String(random)
  }

  randomType() {
    let dic = ["Silver", "Gold"]
    let random = Math.round(Math.random())
    this.type = dic[random]
  }

  topUp(amount) {
    if (amount < 500) {
      return console.log(`Sorry, minimum amount is 500`);
    }
    else {
      this.balance = this.balance + amount
      return console.log(`Succesfully toup balance`);
    }
  }
}

class NonMember extends Audience {
  constructor(name, email, age) {
    super(name, email, age)
  }
}

let patria = new Member("patria", "patria.gani@gmail.com", 22)
console.log(patria);
patria.topUp(500)

let theater = new TheaterBroadway()

