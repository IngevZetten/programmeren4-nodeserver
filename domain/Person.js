
class Person{

    constructor(firstname, lastname){
            this._firstname = firstname;
            this._lastname = lastname;
    }

    getfirstname(){
    return this._firstname;
    }
}

//extern beschikbaar maken van objecten/variabele
module.exports = Person;