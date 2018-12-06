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
        this.memberId = this.getId(name, age)
        this.balance = 0
        this.type = this.getType()
    }

    getId(name, age) {
        let id = ''
        id += name[0] + name[1] + name[2]
        id += (2018-Number(age))
        id += Math.floor(Math.random() * (20 - 1 + 1)) + 1 
        return id
    }

    getType() {
        let type = Math.round(Math.random())
        if (type === 1) {
            return 'Gold'
        } else {
            return 'Silver'
        }
    }

    topUp(num) {
        if (num < 500) {
            console.log(`Sorry, minimum amount is 500`);
        } else {
            this.balance += num
            console.log('topup success');
        }
    }

}

class TheaterBroadway {
    constructor() {
        this.todayShow = null
        this.audiences = {VVIP: [], VIP: [], Regular: []}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow() {
        let show = ['Naruto', 'Boruto']
        this.todayShow = show[Math.round(Math.random())]
        this.priceVVIP = 100000
        this.priceVIP = this.priceVVIP - 25000
        this.priceRegular = this.priceVIP - 50000
    }

    showAudiences() {
        for (const key in this.audiences) {
            console.log(`----- ${key} -----`);
            if (this.audiences[key].length > 0) {
                this.audiences[key].forEach((audience, i) => {
                    console.log(`${i+1}. ${audience.name} (${audience.type} member)`);
                });

            } else {
                console.log('THERE IS NO AUDIENCE IN THIS SECTION');
            }
        }
    }

    buyTicket(buyyer, type, tickets) {
        if(type === 'VVIP' && buyyer.type === 'Silver') {
            console.log("We are sorry, this section only for gold member");
        } else if (type === 'VIP' && buyyer.type === 'Regular') {
            console.log(`With all due respect, section ${type} only for member`);
        } else if (type === 'VVIP' && buyyer.type === 'Regular') {
            console.log(`With all due respect, section ${type} only for member`);
        } else {
            let section = []
            if (type === 'VVIP') {
                section = this.priceVVIP
            } else if (type === 'VIP') {
                section = this.priceVIP
            } else {
                section = this.priceRegular
            }
            if (buyyer.type === 'Regular') {
                console.log('invoice');
                console.log(this.constructor.name, '         ',  'TICKET CONFIRMED');
                console.log('       ', this.todayShow, buyyer.name, `${buyyer.type}`);
                console.log('*******************************************************');
                console.log(`Quantity: ${tickets}`);
                console.log(`Price: ${section}`);
                console.log(`Sub Total: ${section*tickets}`);
                console.log(`Grand Total: ${section*tickets}`, '          ');
                for (let i = 0; i < tickets; i++) {
                    this.audiences[type].push(buyyer)
                }
            } else {
                let section = []
                if (type === 'VVIP') {
                    section = this.priceVVIP
                } else if (type === 'VIP') {
                    section = this.priceVIP
                } else {
                    section = this.priceRegular
                }
                console.log('invoice');
                console.log(this.constructor.name, '         ',  'TICKET CONFIRMED');
                console.log('       ', this.todayShow, buyyer.memberId, `${buyyer.type}`);
                console.log('*******************************************************');
                console.log(`Quantity: ${tickets}`);
                console.log(`Price: ${section}`);
                console.log(`Sub Total: ${section*tickets}`);
                console.log(`Balance: ${buyyer.balance}`);
                console.log(`Grand Total: PAID BY BALANCE`, '          ', `Remaining Balance: ${buyyer.balance - section*tickets}`);
                buyyer.balance = buyyer.balance - section*tickets
                for (let i = 0; i < tickets; i++) {
                    this.audiences[type].push(buyyer)
                }
            }
        }

    }

}

let irsyah = new Member('irsyah', 'irsyah@mail.com', 22)
let rama = new Audience('rama', 'rama@mail.com', 20)

let theater = new TheaterBroadway()

irsyah.topUp(500000)

// console.log(rama);

theater.setTodayShow()
// console.log(theater);

theater.buyTicket(rama, 'Regular', 3)
theater.buyTicket(irsyah, 'VIP', 2)
theater.showAudiences()

console.log(irsyah);