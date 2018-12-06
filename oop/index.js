const Member = require('./member')
const NonMember = require('./nonmember')

class Theater {
  constructor() {
    this.todayShow = null
    this.audiences = {VVIP: [], VIP: [], Regular: []} 
    this.priceVVIP = null
    this.priceVIP = null
    this.priceRegular = null
  }

  setTodayShow(judul , priceVVIP, priceVIP, priceRegular) {
    this.todayShow = judul
    this.priceVVIP = priceVVIP
    this.priceVIP = priceVIP
    this.priceRegular = priceRegular
  }

  showAudience() {
    let noAudi = `THERE IS NO AUDIENCE IN THIS SECTION`
    console.log(`LIST AUDIENCE: `)
    console.log(`---------------VVIP---------------`)
    if (this.audiences.VVIP.length == 0) {
      console.log(noAudi)
    } else {
      this.getList('VVIP')
    }
    console.log(`---------------VIP---------------`)
    if (this.audiences.VIP.length == 0) {
      console.log(noAudi)
    } else {
      this.getList('VIP')
    }
    console.log(`---------------Regular---------------`)
    if (this.audiences.Regular.length == 0) {
      console.log(noAudi)
    } else {
      this.getList('Regular')
    }
  }

  getList(section) {
    let result = []
    for (let i = 0; i < section.length; i++) {
      result.push(`${i+1}. ${this.audiences.section[i].name} (${this.audiences.section[i].type} member) `)
    }
    return result.join('\n')
  }

  buyTicket(audience, section, amount) {
    if(audience.constructor.name == 'Member') {
      if (audience.type == 'gold') {
        this.genAmount(amount, section, audience)
      } else if (audience.type == 'silver') {
        if (section == 'VVIP') {
          console.log(`We are sorry, this section only for gold member`)
        } else {
          this.genAmount(amount, section, audience)
        }
      } 
    } else if (audience.constructor.name == 'NonMember') {
      
    }
  }
  
  genAmount(amount, sect, audi) {
    if (sect == 'VVIP') {
      for (let i = 0; i < amount; i++) {
        this.audiences.VVIP.push(audi)
      }
    } else if (sect == 'VIP') {
      for (let i = 0; i < amount; i++) {
        this.audiences.VIP.push(audi)
      }
    } else if (sect == 'Regular') {
      for (let i = 0; i < amount; i++) {
        this.audiences.Regular.push(audi)
      }
    }
  }
}