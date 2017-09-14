"use strict"
const knex = require("./db");

if(!process.argv[3]){
  console.log("usage: node hello-knex-3.js <id> <nome>");
  process.exit(0);
}

let id = process.argv[2];
let nome = process.argv[3];

knex("convidado").update({
  nomeconvidado:nome
}).where({
  idconvidado:id
}).then((ret) => {
  console.log(`convidado ${id} renomeado para ${nome}`);
  process.exit(0);
}).catch((err) => { 
  console.log(err);
  process.exit(1);
});