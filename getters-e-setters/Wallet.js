class Wallet {
    #ammout
    #username

    constructor() {
        this.#ammout = 100.99 * 100 //10099
    }

    get ammount() {
        return this.#ammout / 100
    }

    getAmmount() {
        return this.#ammout / 100
    }

    set username(newUserName) {
        if (typeof newUserName === "string"){
            this.#username = newUserName
        } else {
            console.log("Username must be of type string")
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.ammount)
console.log(myWallet.getAmmount())
myWallet.username = "Raul"
console.log(myWallet.username)
myWallet.username += " Migliari"
console.log(myWallet.username)
myWallet.username = true
console.log(myWallet.username)