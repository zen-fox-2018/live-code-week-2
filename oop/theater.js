class Theater {
  constructor(name) {
    this.name = name || null
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
    let check = [false]
    if(audience.constructor.name == 'Member') {
      if (audience.type == 'gold') {
        this.genAmount(amount, section, audience)
        check = [true, this.genPrice(section) ]
      } else if (audience.type == 'silver') {
        if (section == 'VVIP') {
          console.log(`We are sorry, this section only for gold member`)
        } else {
          this.genAmount(amount, section, audience)
          check = [true, this.genPrice(section)]
        }
      } 
    } else if (audience.constructor.name == 'NonMember') {
      if (section !== 'Regular') {
        console.log(`With all due respect, section ${section} only for member`)
      } else {
        this.genAmount(amount, section, audience)
        check = [true, this.genPrice(section) ]
      }
    }
    if (check[0] == true) {
      this.genInvoice(audience, amount , check[1] )
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

  genInvoice(audi, amount, price) {
    console.log(`**************************INVOICE****************************`)
    if (this.name == null) {
      console.log(` Theater Broadway                             TICKET CONFIRMED`)
    } else {
      console.log(` Theater ${this.name}                             TICKET CONFIRMED`)
    }
    let temp ;
    if (audi.constructor.name == 'NonMember') {
      temp = `${audi.name} (${audi.type})`
    } else {
      temp = `${audi.memberId} (${audi.type})`
    }
    console.log(`                     ${this.todayShow}      ${temp}`)
    console.log('*************************************************************')
    console.log(`Quantity    : ${amount}`)
    console.log(`Price       : ${price}`)
    let subTot = amount* price
    console.log(`Sub Total   : ${subTot}`)
    if (audi.constructor.name == 'Member') {
      console.log(`Balance     : ${audi.balance}`)
    }
    if (audi.constructor.name == 'Member') {
      let remain = audi.balance - subTot
      if (remain >= 0) {
        audi.balance = remain
        console.log(`Grand Total : PAID BY BALANCE         Remaining Balance: ${audi.balance}`)
      } else {
        let minus = Math.abs(remain)
        audi.balance = 0
        console.log(`Grand Total : ${minus}         Remaining Balance: ${audi.balance}`)
      }
    } else {
      console.log(`Grand Total : ${subTot}       `)

    }
    console.log('*************************************************************')

  }

  genPrice(section) {
    if (section == 'VVIP') {
      return this.priceVVIP
    } else if (section == 'VIP') {
      return this.priceVIP
    } else if (section == 'Regular') {
      return this.priceRegular
    }
  }
}

module.exports = Theater