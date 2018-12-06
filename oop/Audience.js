class Audience {
    constructor(name, email, age, type) {
        this._name = name;
        this._email = email;
        this._age = age;
        this._type = type || "reguler"
    }

}

module.exports = Audience