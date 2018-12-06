

class TheaterBroadway {
    constructor() {
        this.todayShow = null
        this.audiences = {VVIP: new Array, VIP: new Array, Regular: new Array}
        this.priceVVIP = null
        this.priceVIP = null
        this.priceRegular = null
    }

    setTodayShow(nameShow, priceVVIP, priceVIP, priceRegular){
        this.todayShow = nameShow
        this.priceVVIP = priceVVIP
        this.priceVIP = priceVIP
        this.priceRegular = priceRegular
    }

    showAudience() {
        let regular = this.audiences.Regular
        let vip = this.audiences.VIP
        let vvip = this.audiences.VVIP

        console.log('List AUDIENCE :')
        console.log('-----------------VVIP-------------------')
        if(!vvip.length){
            console.log("THERE IS NO AUDIENCE IN THIS SECTION");
        }else {
            for ( let i = 0 ; i < vvip.length; i++) {

            }
        }
        console.log('------------------VIP-------------------')
        if(!vip.length  ){
            console.log("THERE IS NO AUDIENCE IN THIS SECTION");
       } else {
            for ( let i = 0 ; i < vvip.length; i++) {
                    
            }
       }
       console.log('----------------Reguler------------------')
        if(!regular.length  ){
             console.log("THERE IS NO AUDIENCE IN THIS SECTION");
        } else {
            for ( let i = 0 ; i < vvip.length; i++) {
                
            }
        }
       
        
    }

    buyTicket(classAudience, section, jumlahtiket){
        let grandTotal =0
        let subTotalVVIP = this.priceVVIP * jumlahtiket
        let subTotalVIP = this.priceVIP * jumlahtiket
        let subTotalRegular = this.priceRegular * jumlahtiket
        if(section == 'VVIP'){
            if(classAudience.type.typeMember == 'Silver') {
               return console.log("We are sorry, this section only for gold member");   
            } else if(classAudience.type.typeMember == 'Regular') {
                return console.log(`With all due respect, section ${section} only for member`);
            } else {
                
                this.audiences.VVIP.push(classAudience)
                if(classAudience.type.balance < subTotalVVIP){
                    classAudience.type.balance = 0
                }else {
                    classAudience.type.balance -= (this.priceVVIP * jumlahtiket)
                }        
            }
        } else if (section == 'VIP') {
            if(classAudience.type.typeMember == 'Regular') {
                 return console.log(`With all due respect, section ${section} only for member`);
             } else {
                 
                 this.audiences.VIP.push(classAudience)
                 if(classAudience.type.balance < subTotalVIP){
                     classAudience.type.balance = 0
                 }else {
                     classAudience.type.balance -= subTotalVIP
                 }     
                 console.log();
                 
             }
        } else if(section == 'Regular' ){

            this.audiences.Regular.push(classAudience)
             
            console.log();
        }
        if (section == 'VVIP' && section == 'VIP'){
            
        }
    }
}

module.exports = TheaterBroadway