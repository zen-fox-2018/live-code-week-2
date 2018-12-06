class Audience {
  constructor (name, email, birthYear, type, ticketType){
    this.name = name;
    this.email = email;
    this.age = calculateAge(birthYear);
    this.type = 'nonMember';
    this.ticketType = ticketType;
  }

  calculateAge (birthYear){
    var date = new Date();
    var Year = getYear(date);
    return Year - birthYear;
  }
}

class Member extends Audience {
  constructor (name, email, age, type, ticketType, memberId, balance){
    super(name, email, age, type, ticketType);
    this.type = generateTypeMember();
    this.memberId = memberId;
    this.balance = 0;
  }

  generateTypeMember(){
    var random = Math.round(Math.random());
    if (random === 1) {
      return 'gold';
    }
    else {
      return 'silver';
    }
  }

  generateMemberID(name,age){
    var result = '';
    for (var i = 0; i < name.length; i++) {
      if (i <= 2) {
        result += name[i];
      }
    }
    if (result.length < 2) {
      while (result.length <= 2) {
        result += 'x';
      }
    }
    result += age;
    var randomNum = String(Math.floor(Math.random() * 20));
    if (randomNum.length = 1) {
      randomNum = '0' + randomNum;
    }
    result += randomNum;
    return result;
  }

  balanceTopUp(topUpNominal){
    if (topUpNominal < 500) {
      return `Sorry, minimum top up adalah 500.`
    }
    else {
      this.balance += topUpNominal;
      return `Your current balance is : ${this.balance}`
    }
  }
}

class TheaterBroadway {
  constructor(){
    this.todayShow = null;
    this.audience = { VVIP: [], VIP: [], Regular: []};
    this.priceVVIP = null;
    this.priceVIP = null;
    this.priceRegular = null;
  }

  setTodayShow(showName, priceVVIP, priceVIP, priceRegular){
    this.todayShow = showName;
    this.priceVVIP = priceVVIP;
    this.priceVIP = priceVIP;
    this.priceRegular = priceRegular;
  }

  showAudience(audience){
    for (let i = 0; i < audience .length; i++) {
      if (audience[i].ticketType == 'VVIP') {
        this.audience.VVIP.push([audience[i].name, audience[i].type])
      }
      else if (audience[i].ticketType == 'VIP') {
        this.audience.VIP.push([audience[i].name], audience[i].type)
      }
      else if (audience[i].ticketType == 'VIP') {
        this.audience.Regular.push([audience[i].name], audience[i].type)
      }
    }
    console.log('LIST AUDIENCE');
    console.log('-------------- VVIP---------------');
    if (this.audience.VVIP.length > 0) {
      var count = 1;
      for (let i = 0; i < this.audience.VVIP.length; i++) {
        console.log(count+'. '+ this.audience.VVIP[i][0] + ' ('+ this.audience.VVIP.[i][1]+' member)');
      }
    }
    else {
      console.log('THERE IS NO AUDIENCE IN THIS SECTION');
    }
    console.log('-------------- VIP---------------');
    if (this.audience.VIP.length > 0) {
      var count = 1;
      for (let i = 0; i < this.audience.VIP.length; i++) {
        console.log(count+'. '+ this.audience.VIP[i][0] + ' ('+ this.audience.VIP.[i][1]+' member)');
      }
    }
    else {
      console.log('THERE IS NO AUDIENCE IN THIS SECTION');
    }
    console.log('-------------- Regular---------------');
    if (this.audience.Regular.length > 0) {
      var count = 1;
      for (let i = 0; i < this.audience.Regular.length; i++) {
        console.log(count+'. '+ this.audience.Regular[i][0] + ' ('+ this.audience.Regular.[i][1]+' member)');
      }
    }
    else {
      console.log('THERE IS NO AUDIENCE IN THIS SECTION');
    }

  }
}
