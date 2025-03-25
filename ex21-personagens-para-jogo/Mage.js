const Character = require("./Character")

class Mage extends Character {
    constructor(name, life, attack, defense, magic) {
        super(name, life, attack, defense)
        this.magic = magic
    }

    attackEnemy(otherCharacter) {
        otherCharacter.life -= (this.magic + this.attack) - otherCharacter.defense
    }

    cure(otherCharacter) {
        otherCharacter.life += this.magic * 2
    }
}

module.exports = Mage