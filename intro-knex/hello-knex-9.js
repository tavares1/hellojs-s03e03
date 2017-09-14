const knex = require("./db")

if(!process.argv[2]){
    console.log("usage: node hello-knex-9.js <nome>")
    process.exit(0)
}

let inserir = "insert into convidado(nomeconvidado) values (:nome)"

let nome = {
    nome: process.argv[2]
}

knex.raw(inserir,nome).then(()=>{
    console.log('nome inserido!')
    process.exit(0)
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})
