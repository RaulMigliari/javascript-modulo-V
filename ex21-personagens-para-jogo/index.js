const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const arthur = new Mage('Arhur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({arthur, beatrice, cain})

cain.changePosition()
arthur.attackEnemy(cain)
beatrice.attackEnemy(arthur)

console.table({arthur, beatrice, cain})

cain.changePosition()
cain.attackEnemy(arthur)
arthur.cure(arthur)
beatrice.attackEnemy(cain)

console.table({arthur, beatrice, cain})