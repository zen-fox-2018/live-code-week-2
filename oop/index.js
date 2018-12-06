class Audience {
    constructor (name, email, age) {
        this.name = name
        this.email = email
        this.age = age
        this.type = 'Regular'
    }
}

// class VVIP extends Audience {
//     constructor (name, email, age) {
//         super(name, email, age)
//         this.type = 'VVIP'
//     }


// }

// class VIP extends Audience {
//     constructor (name, email, age) {
//         super(name, email, age)
//         this.type = 'VIP'
//     }
// }



class Member extends Audience {
    constructor (name, email, age) {
        super(name, email, age)
        this.memberID = null
        this.balance = 0
        this.type = null
        this.getMemberId(name, age)
        this.getTypeMember()
        
    }

    getMemberId (name, age) {
        let thisYear = new Date().getFullYear();
        let k = Math.floor(Math.random() * 20)+1
        let memberID = ''
        for(let i = 0; i < 3; i++) {
            memberID+=name[i]
        }
        memberID+=String(thisYear-age)+String(k)
        this.memberID= memberID
    }

    getTypeMember () {
        let membertype =  ['Gold', 'Silver']
        let randomType = Math.floor(Math.random() * 2)
        this.type = membertype[randomType] 
    }

    topUpBalance(nominal) {
        if(nominal < 500) {
            console.log(`Sorry, minimum amount is 500`)
        }else{
            this.balance+=nominal
        }
    }


}

// class Gold extends Member {
//     constructor() {
//         super()
//     }
// }

// class Silver extends Member{
//     constructor () {

//     }
// }

class TheaterBroadWay {
    constructor() {
        this.todayShow = null
        this.audience = {'VVIP': [], 'VIP': [], 'Regular': []}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow (show,priceRegular,priceVIP,priceVVIP) {
        this.todayShow = show
        this.priceRegular = priceRegular
        this.priceVIP = priceVIP
        this.priceVVIP = priceVVIP
    }

    showAudience() {
       console.log(`LIST AUDIENCE:`) 
       console.log(`-------------- VVIP---------------`)
       if(this.audience.VVIP.length == 0) {
           console.log(`THERE IS NO AUDIENCE IN THIS SECTION`)
       }else{
        for(let i = 0; i < this.audience.VVIP.length; i++) {
            console.log(`${i+1}. ${this.audience.VVIP[i].name} (${this.audience.VVIP[i].type} member)`)
        }
       }
       console.log(`-------------- VIP ---------------`)
        if(this.audience.VIP.length == 0) {
            console.log(`THERE IS NO AUDIENCE IN THIS SECTION`)
        }else{
        for(let i = 0; i < this.audience.VIP.length; i++) {
            console.log(`${i+1}. ${this.audience.VIP[i].name} (${this.audience.VIP[i].type} member)`)
        }
        }
       console.log(`-------------- Regular---------------`)
        if(this.audience.Regular.length == 0) {
            console.log(`THERE IS NO AUDIENCE IN THIS SECTION`)
        }else{
        for(let i = 0; i < this.audience.Regular.length; i++) {
            console.log(`${i+1}. ${this.audience.Regular[i].name} (${this.audience.Regular[i].type} member)`)
        }
        }
    }

    buyTicket(audience, section, quantity) {
        let price = null
        let buy = false
        if(audience.type == 'Gold' && section == 'VVIP'){
            //beli VVIP
            buy = true
            price = this.priceVVIP
            for(let i = 0; i < quantity; i++) {
                this.audience.VVIP.push(audience)
            }
        }else if  (audience.type !== 'Regular' && section == 'VIP' ){
            //beli VIP
            buy = true
            price = this.priceVIP
            for(let i = 0; i < quantity; i++) {
                this.audience.VIP.push(audience)
            }
        }else if (audience.type == 'Regular' && section !== 'Reguler'){
            console.log(`With all due respect, section ${section} only for member`)
        }else if (audience.type == 'Silver' && section == 'VVIP'){
            Console.log("We are sorry, this section only for gold member")
        }else{
            //beli regular
            buy = true
            price = this.priceRegular
            for(let i = 0; i < quantity; i++) {
                this.audience.Regular.push(audience)
                if(audience.type !== 'Regular') {
                }
            }
        }
        //invoice
        if(buy && audience.type !== 'Regular'){
            
            console.log(`**************************INVOICE****************************`)
            console.log(`Theater Broadway                             TICKET CONFIRMED`)
            console.log(`                     ${this.todayShow}      ${audience.memberID} (${audience.type})`)
            console.log(`*************************************************************`)
            console.log(`Quantity    : ${quantity}`)
            console.log(`Price       : ${price}`)
            console.log(`Sub Total   : ${price * quantity}`)
            console.log(`Balance     : ${audience.balance}`)
            if(price * quantity <= audience.balance){
                console.log(`Grand Total : PAID BY BALANCE         Remaining Balance: ${audience.balance - (price * quantity)}`)
            }else{
                console.log(`Grand Total : ${(price * quantity)- audience.balance}                     Remaining Balance: 0`)
            }
            console.log(`*************************************************************`)
            

        }else if(buy && audience.type === 'Regular'){
            console.log(`**************************INVOICE****************************`)
            console.log(`Theater Broadway                             TICKET CONFIRMED`)
            console.log(`                     ${this.todayShow}      ${audience.name} (${audience.type})`)
            console.log(`*************************************************************`)
            console.log(`Quantity    : ${quantity}`)
            console.log(`Price       : ${price}`)
            console.log(`Sub Total   : ${price * quantity}`)
            console.log(`Grand Total : ${price * quantity}`)
            
            console.log(`*************************************************************`)
            
        }
        
    }
}

let icha = new Member ('irsyah', 'icha.com', '22')
icha.topUpBalance(100000)
let rama = new Audience ('rama', 'rama.com', 22)
// console.log(icha)
let mormon = new TheaterBroadWay ()
mormon.setTodayShow('The book of Mormon',12,100,1000)
mormon.buyTicket(icha,'Regular', 2)
mormon.buyTicket(rama,'Reguler', 1)
mormon.showAudience()

