
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
        this.priceRegular= null
    }

    setTodayShow(todayShow, priceVVIP, priceVIP,priceRegular ){
        this.todayShow = todayShow
        this.priceVVIP = priceVVIP
        this.priceVIP =  priceVIP
        this.priceRegular = priceRegular
    }

    showAudience(){
        console.log('LIST AUDIENCE:')
        console.log('-------------- VVIP---------------')
        if( this.audiences.VVIP.length == 0){
            console.log('THERE IS NO AUDIENCE IN THIS SECTION')
        }   else{           
            for(let i = 0; i < this.audiences.VVIP.length; i++){
                console.log(`${i+1}. ${this.audiences.VVIP[i].name} (gold member) `)
            }
        }

        console.log('-------------- VIP---------------')

        if( this.audiences.VIP.length == 0){
            console.log('THERE IS NO AUDIENCE IN THIS SECTION')
        }   else{            
            for(let i = 0; i < this.audiences.VIP.length; i++){
                console.log(`${i+1}. ${this.audiences.VIP[i].name} (${this.audiences.VIP[i].type} member) `)
            }
        }

        console.log('------------- Regular ---------------')
        if( this.audiences.Regular.length == 0){
            console.log('THERE IS NO AUDIENCE IN THIS SECTION')
        }   else{            
            for(let i = 0; i < this.audiences.Regular.length; i++){
                console.log(`${i+1}. ${this.audiences.VIP[i].name} (regular member) `)
            }
        }
    }

    buyTicket(customer, section, quantity){
        if(customer.type == 'Silver' && section == 'VVIP'){
            console.log(`We are sorry, this section only for gold member`)
        }   
        else if(customer.type == 'Non Member' && section == 'VVIP' ||customer.type == 'Non Member' && section == 'VIP'){
            console.log(`With all due respect, section ${section} only for member`)
        }   
        else if(section == 'VVIP'){
            this.audiences.VVIP.push(customer)
            this.generateInvoice(customer, section, quantity, this.priceVVIP)
        }  
        else if(section == 'VIP'){
            this.audiences.VIP.push(customer)
            this.generateInvoice(customer, section, quantity, this.priceVIP)
        }   else{
            this.audiences.Regular.push(customer)
            this.generateInvoice(customer, section, quantity, this.priceRegular)
        }
    }

    generateInvoice(customer, section, quantity, price){
        if(customer.type !== 'Non Member'){
            console.log('**************************INVOICE****************************')
            console.log('Theater Broadway                             TICKET CONFIRMED')
            console.log(`                     ${this.todayShow}      ${customer.memberId} (${customer.type})`)
            console.log('*************************************************************')
            console.log(`Quantity    : ${quantity}`)
            console.log(`Price       : ${price}`)
            console.log(`Sub Total   : ${quantity * price}`)
            console.log(`Balance     : ${customer.balance}`)
            console.log(`Grand Total : PAID BY BALANCE         Remaining Balance:${customer.balance - quantity * price}  `)
            console.log('*************************************************************')
        }
    }
}

var member1  = new Member('Aditya','@com','25', )
var nonMember1 = new NonMember('Rama', '@com', '22')

member1.topUp(10)
member1.topUp(500000)

console.log(member1)
console.log(nonMember1)

var bookOfMormon  = new TheaterBroadway()
bookOfMormon.setTodayShow('The Book Of Mormon', 500, 300, 150)
console.log(bookOfMormon)

bookOfMormon.showAudience()

bookOfMormon.buyTicket(nonMember1, 'VIP', 1)

bookOfMormon.buyTicket(member1, 'VIP', 3)

bookOfMormon.showAudience()
// console.log(bookOfMormon.audiences.VVIP)





