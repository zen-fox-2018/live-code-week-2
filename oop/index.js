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
    let price = null
    if (section === 'Regular') {
      price = this.priceRegular
    } else if (section === 'VIP'){
      price = this.priceVIP
    } else if (section === 'VVIP'){
      price = this.priceVVIP
    }

    if (audience.type === 'Silver' && section === 'VVIP') {
      console.log(`We are Sorry, this section only for gold member`);
    } else if (audience.type === 'Regular' && section !== 'Regular') {
      console.log(`With all due respect, section ${section} only for member`);
    } else {

      this.printTicket(this.todayShow, audience, num, price)
      for (let i = 1 ; i <= num; i++) {
        this.audiences[section].push(audience)
      }

    }
  }

  printTicket(show, member, num, price) {

    let grandTotal = price * num
    console.log(`**************************INVOICE**************************`);
    console.log(`${this.constructor.name}                   TICKET CONFIRMED`);

    if (member.constructor.name === "Member") {

      console.log(`${this.todayShow}                    ${member.memberId} (${member.type})`);
      console.log(`***********************************************************`);
      console.log(`Quantity     : ${num}`);
      console.log(`Price        : ${price}`);
      console.log(`SubTotal     : ${price * num}`);

      member.balance = member.balance - price * num
      if (member.balance < 0) {
        grandTotal = Math.abs(member.balance)
        member.balance = 0
      } else {
        grandTotal = 'PAID BY BALANCE'
      }
      console.log(`Balance      : ${member.balance}`);
      console.log(`Grand Total  : ${grandTotal}      Remaining Balance: ${member.balance}`);
      console.log(`***********************************************************`);
    } else {
      console.log(`${this.todayShow}                    ${member.name} (${member.type})`);
      console.log(`***********************************************************`);
      console.log(`Quantity     : ${num}`);
      console.log(`Price        : ${price}`);
      console.log(`SubTotal     : ${price * num}`);
      console.log(`Grand Total     : ${price * num}`);
      console.log(`***********************************************************`);
    }
  }

  showAudience(){
    console.log(`LIST AUDIENCE:`);

    for (let key in this.audiences) {
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

let membertest = new NonMember('maman', 'rahman.hasri@gmail.com', 22)
let theaterPasar = new TheaterBroadway()
let ibenk = new Member('ibenk', 'ibenk', 22)
console.log(ibenk);
theaterPasar.setTodayShow('The book of Mormon', [700, 600, 500])
ibenk.topUp(10000);
theaterPasar.buyTicket(ibenk, 'VIP', 2)
theaterPasar.buyTicket(membertest, 'Regular', 2)
console.log(theaterPasar.showAudience());
