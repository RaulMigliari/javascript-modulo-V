class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property {

}

class Apartment extends Property {
    constructor(number, area, price) {
        /* 
            this.area = area => Não usamos isso, porque o javascript não permite definirmos manualmente as propriedades da classe mãe, já que não é possível
            chamar o construtor da subclass (classe filha) sem antes definirmos as propriedades herdadas da classe mãe.
            Para isso, usamos o método super(propriedades_da_classe_mãe)
        */
       super(area,price)
       this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)
const apt = new Apartment("201", 100, 160000)

console.log(land)
console.log(someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Property) // retorna true
console.log(apt)
console.log(apt.getFloor())