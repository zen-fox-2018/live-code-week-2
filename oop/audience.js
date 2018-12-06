// class Audience {
//     constructor(name,email,age) {
//         this.name = name
//         this.email = email
//         this.age = age
//         this.type = 'Regular'
//     }
// }

// class Member extends Audience {
//     constructor(name,email,age){
//         super(name,email,age)
//         this.memberId = this.createID(name,age)
//         this.balance = 0
//     }

//     createID(name,age){
//         let id = ''
//         let getName = ''

//         for (let i = 0; i < 3; i++) {
//             getName += name[i]
//         }
    
//         let year = new Date().getFullYear()
//         id = getName+(year-age)+(Math.floor(Math.random()*20))
//         return id
//     }


// }

// class NonMember extends Audience {
//     constructor(name,email,age){
//         super(name,email,age)
//     }
// }

// module.exports = {Audience}

// let a = new Member('rama','hektiv',22)
// let b = new NonMember('icha','hektiv',25)

// console.log(a);
// console.log(b);


function memberType() {
    let type = ''
    let random = Math.floor(Math.random())

    if(random < 1) {
        type = 'Gold'
    } else {
        type = 'Silver'
    }
}

console.log(a);
