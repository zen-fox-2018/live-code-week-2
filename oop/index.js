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
      console.log(`${i+1}. ${this.audiences.VVIP[i].name} (${this.audiences.VVIP[i].type} member)`);
    }

    console.log(`-------------- VIP---------------`);
    if (this.audiences.VIP.length === 0) {
      console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
    }
    for (let i = 0; i < this.audiences.VIP.length; i++) {
      console.log(`${i+1}. ${this.audiences.VIP[i].name} (${this.audiences.VIP[i].type} member)`);
    }

    console.log(`-------------- Regular---------------`);
    if (this.audiences.Regular.length === 0) {
      console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
    }
    for (let i = 0; i < this.audiences.Regular.length; i++) {
      console.log(`${i+1}. ${this.audiences.Regular[i].name} (${this.audiences.Regular[i].type} member)`);
    }
  }

  buyTicket(audience, section, totalTicket) {
    if (audience.type !== "Gold" && section === "VVIP") {
      return console.log(`"We are sorry, this section only for gold member"`);
    }
    else if (audience.type === "Regular" && (section === "VVIP" || section === "VIP")) {
      return console.log(`With all due respect, section ${section} only for member`);
    }
    else {
      let balance = audience.balance
      if (section === "VVIP") {
        for (let i = 0; i < totalTicket; i++) {
          audience.balance = audience.balance - this.priceVVIP
          this.audiences.VVIP.push(audience)
        }
        //Cetak Invoice
        console.log(`**************************INVOICE****************************`);
        console.log(`Theater Broadway                             TICKET CONFIRMED`);
        console.log(`                     ${this.todayShow}      ${audience.memberId} (${audience.type})`);
        console.log(`*************************************************************`);
        console.log(`Quantity    : ${totalTicket}`);
        console.log(`Price       : ${this.priceVVIP}`);
        console.log(`Sub Total   : ${totalTicket * this.priceVVIP}`);
        console.log(`Balance     : ${balance}`);
        console.log(`Grand Total : PAID BY BALANCE         Remaining Balance: ${audience.balance}`);
        console.log(`*************************************************************`);

      }
      else if (section === "VIP") {
        for (let i = 0; i < totalTicket; i++) {
          audience.balance = audience.balance - this.priceVIP
          this.audiences.VIP.push(audience)
        }
        //Cetak Invoice
        console.log(`**************************INVOICE****************************`);
        console.log(`Theater Broadway                             TICKET CONFIRMED`);
        console.log(`                     ${this.todayShow}      ${audience.memberId} (${audience.type})`);
        console.log(`*************************************************************`);
        console.log(`Quantity    : ${totalTicket}`);
        console.log(`Price       : ${this.priceVVIP}`);
        console.log(`Sub Total   : ${totalTicket * this.priceVVIP}`);
        console.log(`Balance     : ${balance}`);
        console.log(`Grand Total : PAID BY BALANCE         Remaining Balance: ${audience.balance}`);
        console.log(`*************************************************************`);
      }
      else if (section === "Regular") {
        for (let i = 0; i < totalTicket; i++) {
          audience.balance = audience.balance - this.regular
          this.audiences.Regular.push(audience)
        }
        //Cetak Invoice
        console.log(`**************************INVOICE****************************`);
        console.log(`Theater Broadway                             TICKET CONFIRMED`);
        console.log(`                     ${this.todayShow}      ${audience.name} (${audience.type})`);
        console.log(`*************************************************************`);
        console.log(`Quantity    : ${totalTicket}`);
        console.log(`Price       : ${this.priceVVIP}`);
        console.log(`Sub Total   : ${totalTicket * this.priceVVIP}`);
        console.log(`Grand Total : ${totalTicket * this.priceVVIP}`);
        console.log(`*************************************************************`);
      }
    }
  }
}

class Audience {
  constructor(name, email, age) {
    this.name = name
    this.email = email
    this.age = age
    this.type = "Regular"
  }
}

class Member extends Audience {
  constructor(name, email, age) {
    super(name, email, age)
    this.memberId = this.generateMemberId()
    this.balance = 0
    this.randomType()
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

let patria = new Member("patria", "patria.gani@gmail.com", 22)
console.log(patria);
patria.topUp(500)

let rama = new Audience("rama", "rama.penguasa@dunia.com", 24)
console.log(rama);

let theater = new TheaterBroadway()
theater.setTodayShow('Patria Makan Bakpao The Movie', 200, 150, 100)
theater.buyTicket(patria, "VIP", 2)
theater.buyTicket(rama, "Regular", 2)

console.log(theater);
theater.showAudience()



