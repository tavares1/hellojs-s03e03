const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); 

let inserir = "insert into presenca(usuario,episodio,datapresenca,repositorio) values (:nome,:episodio,:datapresenca,:repositorio)"

let nome = {
    nome: 'Teste',
    episodio: 'e03',
    datapresenca:new Date(),
    repositorio: 'hello-js0303'
}

knex.raw(inserir,nome).then(()=>{
    console.log("inserido com sucesso!")
    knex.raw("select * from presenca").then((ret) => {
      let ultimo_adicionado = ret[ret.length-1]
      let data = new Date(ultimo_adicionado.datapresenca)
      
      console.log(`ID:${ultimo_adicionado.idusuario}\nUsuario:${ultimo_adicionado.usuario}\nData:${data.getFullYear()}/${data.getMonth()}/${data.getDay()}\nEP:${ultimo_adicionado.episodio}\nRepositorio:${ultimo_adicionado.repositorio}`)
      
      process.exit(0)
      })
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})
