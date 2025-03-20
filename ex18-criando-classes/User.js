class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password) {
        if(this.email==email && this.password == password) {
            console.log("Login bem sucedido!")
        } else {
            console.log("Credenciais inválidas...")
        }
    }
}

const raul = new User("Raul Migliari", "raulmigliari@gmail.com", "123456789")

console.log(raul)

raul.login("raulmigliari@gmail.com", "12345678")
raul.login("raulmigliari@gmail.com", "123456789")