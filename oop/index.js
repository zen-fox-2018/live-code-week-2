class Audience {
  constructor(name, email, age, type){
    this.name = name;
    this.email = email;
    this.age = age;
    this.type = type;
  }
}

class Member extends Audience {
  constructor() {
    super();
  }
} 

class NonMember extends Audience {
  constructor() {
    super();
  }
}