const Author = require("./Author");

const jhon = new Author("John Doe")

const post = jhon.writePost("Título do post", "Sic mundus creatus est...")

post.addComment("Raul Migliari", "Muito bom!")
post.addComment("Lucas", "Achei interessante")

console.log(jhon)
console.log(post)