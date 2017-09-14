const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); 

if(!process.argv[2]){
  console.log("usage: node cademeucatiorro.js <nome>")
  process.exit(0)
}

let inserir = "select * from cachorro where nomecachorro=:nome"

let atributos = { 
  nome: process.argv[2]
}

knex.raw(inserir,atributos).then((ret)=>{
  console.log(`ID : ${ret[0].idcachorro} NOME: ${ret[0].nomecachorro} RAÇA: ${ret[0].racacachorro}`)
  process.exit(0)
  }).catch((err)=>{
  console.log(err)
  process.exit(1)
})
