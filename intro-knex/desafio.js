const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);
const axios = require("axios")
const api = axios.create({
  baseURL: "https://api.github.com/"
})

let buscaAlunos = (issue,dataLimite,ep) => {

  api.get(`repos/seita-ifce/hello-js-v3/issues/${issue}/comments`).then(ret => {

    users = ret.data.filter(e => e.user.login != "sombriks" && e.body.includes("hellojs-s03") && +new Date(e.created_at) < +new Date(dataLimite))

    for (user of users) {
      let repositorio = (user.body.slice(user.body.trim().indexOf(`hellojs-s03${ep}`)))
      let episodio = repositorio.slice(repositorio.lastIndexOf('e')).trim().replace(".git", "")
      let inserir = "insert into presenca(usuario,episodio,datapresenca,repositorio) values (:nome,:episodio,:datapresenca,:repositorio)"
      let info = {
        nome: user.user.login,
        episodio: episodio,
        datapresenca: new Date(user.created_at),
        repositorio: repositorio
      }

      knex.raw(`select usuario from presenca where usuario='${info.nome}' and episodio='${info.episodio}'`).then((ret) => {
        if (ret.length == 0) {
          knex.raw(inserir, info).then(() => {
            console.log("inserido com sucesso!")
          }).catch((err) => {
            console.log(err)
          })
        }
        else {
          console.log(`${info.nome} já está no banco!`)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }).catch((err) => console.log(err))
}

buscaAlunos(1,"2017-09-11","e01")
buscaAlunos(2,"2017-09-15","e02")
buscaAlunos(3,"2017-09-19","e03")
