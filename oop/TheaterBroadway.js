class TheaterBroadway {
    constructor(){
        this.todayShow = null
        this.audiences = {VVIP:[],VIP:[],Regular:[]}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow(showName, priceVVIP, priceVIP, priceRegular){
        this.todayShow = showName
        this.priceVVIP = priceVVIP
        this.priceVIP = priceVIP
        this.priceRegular = priceRegular
    }

    showAudience(){
        console.log(`LIST AUDIENCE:`)
        console.log(`--------------VVIP--------------`)
        for(let i = 0; i <this.audiences.VVIP.length; i++){
            if(this.audiences.VVIP.length > 0) {
                console.log(`${i+1}. ${this.audiences.VVIP[i].name} (${this.audiences.VVIP[i].type} member)`)
            }
            else {
                console.log('THERE IS NO AUDIENCE IN THIS SECTION')
            }
        }
        console.log(`--------------VIP--------------`)
        for(let i = 0; i <this.audiences.VIP.length; i++){
            if(this.audiences.VIP.length > 0) {
                console.log(`${i+1}. ${this.audiences.VIP[i].name} (${this.audiences.VIP[i].type} member)`)
            }
            else {
                console.log('THERE IS NO AUDIENCE IN THIS SECTION')
            }
        }
        console.log(`--------------Regular--------------`)
        for(let i = 0; i <this.audiences.Regular.length; i++){
            if(this.audiences.Regular.length > 0) {
                console.log(`${i+1}. ${this.audiences.Regular[i].name} (${this.audiences.Regular[i].type} member)`)
            }
            else {
                console.log('THERE IS NO AUDIENCE IN THIS SECTION')
            }
        }
    }

    buyTicket(objectAudience, broadwaySection, ticketAmount){
        if(objectAudience.type == 'Gold'){
            for(let i = 0; i < ticketAmount; i++){
                if(broadwaySection == 'VVIP'){
                    this.audiences.VVIP.push(objectAudience)
                }
                else if (broadwaySection == 'VIP') {
                    this.audiences.VIP.push(objectAudience)
                }
                else if (broadwaySection == 'Regular'){
                    this.audiences.Regular.push(objectAudience)
                }
                else {
                    return 'invalid section'
                }                
            }                
        }
        else if (objectAudience.type == 'Silver'){            
            if(broadwaySection == 'VVIP'){
                return 'we are sorry, this section only for gold member'
            }
            else if (broadwaySection == 'VIP') {
                this.audiences.VIP.push(objectAudience)
            }
            else if (broadwaySection == 'Regular'){
                this.audiences.Regular.push(objectAudience)
            }
            else {
                return 'invalid section'
            }
        }
        else {            
            if(broadwaySection == 'VVIP'){
                return `With all due respect, section ${broadwaySection} only for member`
            }
            else if (broadwaySection == 'VIP') {
                return `With all due respect, section ${broadwaySection} only for member`
            }
            else if (broadwaySection == 'Regular'){
                this.audiences.Regular.push(objectAudience)
            }
            else {
                return 'invalid section'
            }
        }
        if (objectAudience.type == 'Gold' || objectAudience.type == 'Silver' && broadwaySection == 'VIP') {
            console.log(`***********************INVOICE**************************************`)
            console.log(`Theater Broadway                                    TICKET CONFIRMED`)
            console.log(`                    ${this.todayShow}   ${objectAudience.memberId} ${objectAudience.type}`)
            console.log(`********************************************************************`)
            console.log(`Quantity       : ${ticketAmount}`)
            console.log(`Price          : ${this.priceVIP}`)
            console.log(`Sub Total      : ${this.priceVIP * ticketAmount}`)
            console.log(`Balance        : ${objectAudience.balance}`)
            console.log(`GRAND TOTAL    : PAID BY BALANCE                           Remaining Balance: `)
        }
        
        
    }
}

module.exports = TheaterBroadway