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
        let type = Math.floor(Math.random())
        if (type === 1) {
            return 'Gold'
        } else {
            return 'Silver'
        }
    }

    topUp(num) {
        if (num < 500) {
            console.log(`Sorry, minimum amount is 500`);
        }
    }

}

class TheaterBroadway {
    constructor(todayShow, audiences, priceVVIP, priceVIP, priceRegular) {
        this.todayShow = null
        this.audiences = {VVIP: [], VIP: [], Regular: []}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow() {
        
    }

    showAudiences() {
        for (const key in this.audiences) {
            console.log(`----- ${key} -----`);
            this.audiences[key].forEach((audience, i) => {
                if (this.audiences[key] > 0) {
                    console.log(`${i+1}. ${audience.name} (${audience.type} member)`);
                } else {
                    console.log('THERE IS NO AUDIENCE IN THIS SECTION');
                }
            });
        }
    }

}

let irsyah = new Member('irsyah', 'irsyah@mail.com', 22)
let rama = new Audience('rama', 'rama@mail.com', 20)
console.log(irsyah);
console.log(rama);

console.log(irsyah.getType())