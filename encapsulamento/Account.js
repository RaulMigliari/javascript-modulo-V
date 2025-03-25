class Account {
    #password
    #balance = 0

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        // this.#balance = 0 => Como já foi definido um valor padrão, ele não precisa estar no construtor
    }

    getBalance(email, password) {
        if(this.#authenticate(email,password)){
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email == email && this.#password == password
    }
}

const user = {
    email: "raulmigliari@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("raulmigliari@gmail.com", "123456"))