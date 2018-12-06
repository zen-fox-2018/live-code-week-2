
class Audience {
    constructor(name, email, age, type){
        this.name = name
        this.email = email
        this.age = age
        this.type = type || 'Regular'
    }
}

class getType{
    static RandomSilverGold (){
        let member = ['Silver', 'Gold']
        return member[Math.floor(Math.random()*2)]
    }
}

class Member extends Audience{
    constructor(name, email, age, type){
        super(name, email, age, getType.RandomSilverGold())
        this.memberId = name[0] + name[1] + name[2] + (2018-age) + Math.floor(Math.random()*21)
        this.balance = 0
    }

    topUp(amount){
        if(amount < 500){
            console.log('Sorry, minimum amount is 500')
        }   else{
            this.balance += amount
        }
    }
}

class NonMember extends Audience{
    constructor(name, email, age, type){
        super(name, email, age, 'Non Member')
    }
}

class TheaterBroadway{
    constructor(){
        this.todayShow= null
        this.audiences= { VVIP: [], VIP: [], Regular: [] }
        this.priceVVIP= null
        this.priceVIP= null
        this,priceRegular= null
    }

    setTodayShow(todayShow, priceVVIP, priceVIP,priceRegular ){
        this.todayShow = todayShow
        this.priceVVIP = priceVVIP
        this.priceVIP =  priceVIP
        this.priceRegular = priceRegular
    }

    showAudience(){

    }

    buyTicket(customer, section, quantity){
        if(customer.type == 'Silver' && section == 'VVIP'){
            console.log(`We are sorry, this section only for gold member`)
        }   
        else if(customer.type == 'Non Member' && section == 'VVIP' ||customer.type == 'Non Member' && section == 'VIP'){
            console.log(`With all due respect, section ${section} only for member`)
        }
    }
}

var member1  = new Member('Aditya','@com','25', )
var nonMember1 = new NonMember('rama', '@com', '22')

member1.topUp(10)
member1.topUp(500)

console.log(member1)
console.log(nonMember1)

