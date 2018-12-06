
class Audience {
    constructor(name,email,age,type) {
        this.name = name 
        this.email = email
        this.age = age 
        this.type = type
        this.id =  this.generateId()

    }
    // get name() {
    //     this.name
    // }
    // set name(str) {
    //     this.name
    // }
    // get age() {
    //     return this.age
    // }
    generateId() {
        let id = Object.values(this.name).slice(2)
      //  this.name(id)
        console.log(id)
    }
}

let ahmad = new Audience('ahmad','ahmad@gmail',27,'member')
console.log(ahmad.generateId())
module.exports = Audience