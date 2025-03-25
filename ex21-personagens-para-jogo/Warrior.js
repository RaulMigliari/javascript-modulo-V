const Character = require("./Character")

class Warrior extends Character {
    constructor(name, life, attack, defense, shield) {
        super(name, life, attack, defense)
        this.shield = shield
        this.position = 'attack'
    }

    attackEnemy(otherCharacter) {
        if (this.position === 'attack') {
            super.attackEnemy(otherCharacter)
        } else {
            console.log("Você está em posição de defesa... Mude para o ataque!")
        }
    }

    changePosition() {
        if (this.position == 'attack') {
            this.position = 'defense'
            this.defense += this.shield
        } else {
            this.position = 'attack'
            this.defense -= this.shield
        }
    }
}

module.exports = Warrior