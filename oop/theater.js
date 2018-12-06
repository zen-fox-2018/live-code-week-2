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
      if (type.length) {
        this.audiences[type].forEach( (a, i) => {
          console.log(`${i+1}. ${a} (${a.type} member)`);
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
        console.log(    ```
          **************************INVOICE****************************
          ${this.constructor.name}                             TICKET CONFIRMED
          ${this.todayShow}                ${audience.name} (${audience.type})
          *************************************************************
          Quantity    : ${quantity}
          Price       : ${this.priceRegular}
          Sub Total   : ${quantity * this.priceRegular}1
          Grand Total : ${quantity * this.priceRegular}
          *************************************************************
          ```);
      }
    } else if (audience.constructor.name === 'Member'){
      if (audience.type === 'Silver' && section === 'VIP') {
        console.log(`We are sorry, this section only for gold member`);
      } else {
        console.log(      ```
          **************************INVOICE****************************
          ${this.constructor.name}                             TICKET CONFIRMED
          ${this.todayShow}      ${audience.name} (${audience.type})
          *************************************************************
          Quantity    : 3
          Price       : 500
          Sub Total   : 1500
          Balance     : 10000
          Grand Total : PAID BY BALANCE         Remaining Balance: 8500
          *************************************************************
          ```);
      }
    }
  }
}

module.exports = TheaterBroadway;
