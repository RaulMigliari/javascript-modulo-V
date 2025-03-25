class Character {
    constructor(name, life, attack, defense) {
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }

    attackEnemy(otherCharacter) {
        otherCharacter.life -= this.attack - otherCharacter.defense
    }
}

module.exports = Character