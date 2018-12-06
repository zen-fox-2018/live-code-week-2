
class Audience {
    constructor(name,email,age,type) {
        this.name = name 
        this.email = email
        this.age = age 
        this.type = type
    }
    get name() {
        return this.name
    }
    set name(str) {
        return this.name
    }
    get age() {
        return this.age
    }
    generateId() {
        let id = this.name.splice(0,3) +''+ 2018-this.age

    }
}

let ahmad = new Audience('ahmad','ahmad@gmail',27,'member')
console.log(ahmad.generateId())
module.exports = Audience