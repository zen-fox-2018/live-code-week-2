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
        this.MemberId = null
        this.balance = 0
        this.type = null
        this.getMemberId(name, age)
        this.getTypeMember()
        
    }

    getMemberId (name, age) {
        let name = 'maria'
        let age = 22
        let thisYear = new Date().getFullYear();
        let k = Math.floor(Math.random() * 20)+1
        let memberID = ''
        for(let i = 0; i < 3; i++) {
            memberID+=name[i]
        }
        memberID+=String(thisYear-age)+String(k)
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
        if(this.audience.VIP.length == 0) {
            console.log(`THERE IS NO AUDIENCE IN THIS SECTION`)
        }else{
        for(let i = 0; i < this.audience.VIP.length; i++) {
            console.log(`${i+1}. ${this.audience.VIP[i].name} (${this.audience.VIP[i].type} member)`)
        }
        }
    }
}

let icha = new 