const Character = require("./Character")

class Thief extends Character {
    attackEnemy(otherCharacter) {
        otherCharacter.life -= (this.attack - otherCharacter.defense) * 2
    }
}

module.exports = Thief