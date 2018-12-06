class Audience {
  constructor (name, email, birthYear, type){
    this.name = name;
    this.email = email;
    this.age = calculateAge(birthYear);
    this.type = type
  }

  calculateAge (birthYear){
    var date = new Date();
    var Year = getYear(date);
    return Year - birthYear;
  }
}

class Member extends Audience {
  constructor (name, email, age, type, memberId, balance){
    super(name, email, age, type);
    this.memberId = memberId;
    this.balance = 0;
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

  git 
}

class Theater {
  constructor (todayShow, audiences, priceVVIP, priceVIP, priceRegular){
    this.todayShow = todayShow;
    this.audience = audiences;
    this.priceVIP = priceVIP;
    this.priceVVIP = priceVVIP;
    this.priceRegular = priceRegular;
  }
}
