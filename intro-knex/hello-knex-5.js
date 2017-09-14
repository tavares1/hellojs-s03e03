"use strict"
const knex = require("./db");

knex("convidado").select().then(function(ret){
  console.log("id\t\tnome")
  let i = ret.length;
  while(i--){
    let conv = ret[i];
    console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
  }
  process.exit(0);
}).catch((err) =>{
  console.log(err)
  process.exit(1)  
});