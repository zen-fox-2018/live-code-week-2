class TheaterBroadway {
    constructor() {
        this._todayShow = null;
        this._audience = {VVIP:[],VIP:[],Reguler:[]};
        this._priceVVIP = null;
        this._priceVIP = null;
        this._priceReguler = null;
    }

    set todayShow(input) {
        this._todayShow = input
    }
    set VIP(input) {
        this._priceVIP = input
    }
    set VVIP(input) {
        this._priceVVIP = input
    }
    set Reguler(input) {
        this._priceReguler = input
    }
    SetTodayShow(Show, VVIP, VIP, Reguler) {
        this.todayShow = Show
        this.VIP = VIP
        this.VVIP = VVIP
        this.Reguler = Reguler
    }
    showAudience() {
        // LIST AUDIENCE:
        // -------------- VVIP---------------
        // 1. irsyah (gold member)
        // 2. irsyah (gold member)
        // -------------- VIP---------------
        // THERE IS NO AUDIENCE IN THIS SECTION
        // -------------- Regular---------------
        // 1. rama (regular member)
        console.log('LIST AUDIENCE:')
        for (i in this._audience) {
            console.log(`-------------${i}----------`)
            if ( this._audience[i].length === 0 ) {
                console.log("THERE IS NO AUDIENCE IN THIS SECTION")
            } else {
                this._audience[i].forEach((element,j) => {
                    console.log(`${j+1}. ${elemen._name} (${element.type} member)`)
                });
            }
        }

    }
}

module.exports = TheaterBroadway