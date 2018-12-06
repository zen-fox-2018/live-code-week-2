class TheaterBroadway {
  constructor() {
    this.todayShow = null;
    this.audiences = { VVIP: [], VIP: [], Regular: [] };
    this.priceVVIP = null;
    this.priceVIP = null;
    this.priceRegular = null;
  }

  setTodayShow (todayShow, priceVVIP, priceVIP, priceRegular) {
    this.todayShow = todayShow;
    this.priceVVIP = priceVVIP;
    this.priceVIP = priceVIP;
    this.priceRegular = priceRegular;
  }

  showAudience () {
    console.log(`LIST AUDIENCE:`);
    for (let type in this.audiences) {
      console.log(`-------------- ${type} ---------------`);
      if (this.audiences[type].length) {
        this.audiences[type].forEach( (a, i) => {
          console.log(`${i+1}. ${a.name} (${a.type} member)`);
        });
      } else {
        console.log(`THERE IS NO AUDIENCE IN THIS SECTION`);
      }
    }
  }
  buyTicket(audience, section, quantity) {
    if (audience.constructor.name === 'NonMember') {
      if (section === 'VVIP' || section === 'VIP') {
        console.log(`With all due respect, section ${section} only for member`);
      } else {
        let subTotal = quantity * this.priceRegular;

        console.log(    `
          **************************INVOICE****************************
          ${this.constructor.name}                             TICKET CONFIRMED
                          ${this.todayShow}                ${audience.name} (${audience.type})
          *************************************************************
          Quantity    : ${quantity}
          Price       : ${this.priceRegular}
          Sub Total   : ${subTotal}
          Grand Total : ${subTotal}
          *************************************************************
          `);
          for (let i = 0; i < quantity; i++) {
            this.audiences[section].push(audience);
          }
      }
    } else if (audience.constructor.name === 'Member'){
      if (audience.type === 'Silver' && section === 'VVIP') {
        console.log(`We are sorry, this section only for gold member`);
      } else {
        let price = null;
        if (section === 'VVIP'){
          price = this.priceVVIP;
        } else if (section === 'VIP') {
          price = this.priceVIP;
        } else if (section === 'Regular') {
          price = this.priceRegular;
        }

        let subTotal = quantity * price;
        let grandTotal = null;
        let balance = audience.balance;
        if (audience.balance - subTotal >= 0) {
          grandTotal = 'PAID BY BALANCE';
          audience.balance -= subTotal;
        }else {
          grandTotal = Math.abs(audience.balance - subTotal);
          audience.balance = 0;
        }

        console.log(      `
          **************************INVOICE****************************
          ${this.constructor.name}                             TICKET CONFIRMED
                          ${this.todayShow}      ${audience.name} (${audience.type})
          *************************************************************
          Quantity    : ${quantity}
          Price       : ${price}
          Sub Total   : ${subTotal}
          Balance     : ${balance}
          Grand Total : ${grandTotal}         Remaining Balance: ${audience.balance}
          *************************************************************
          `);
          for (let i = 0; i < quantity; i++) {
            this.audiences[section].push(audience);
          }

      }
    }
  }
}

module.exports = TheaterBroadway;
