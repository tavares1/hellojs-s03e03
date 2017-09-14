const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); 

if(!process.argv[2]){
    console.log("usage: node meuscachorros.js <nome> <racacachorro>")
    process.exit(0)
}

let inserir = "insert into cachorro(nomecachorro,racacachorro) values (:nome,:raca)"

let atributos = {
    nome: process.argv[2],
    raca: process.argv[3]
}

knex.raw(inserir,atributos).then(()=>{
    console.log(`Nome: ${atributos.nome} - Raça :  ${atributos.raca} adicionado com sucesso!`)
    process.exit(0)
    }).catch((err)=>{
    console.log(err)
    process.exit(1)
})
