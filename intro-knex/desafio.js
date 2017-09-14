const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);
const axios = require("axios")
const api = axios.create({
  baseURL: "https://api.github.com/"
})

api.get("repos/seita-ifce/hello-js-v3/issues/1/comments").then(ret => {

  users = ret.data.filter(e => e.user.login != "sombriks" && e.body.includes("hellojs-s03"))

  for (user of users) {
    let repositorio = (user.body.slice(user.body.trim().indexOf("hellojs-s03e01")))
    let episodio = repositorio.slice(repositorio.lastIndexOf('e')).trim().replace(".git", "")
    let inserir = "insert into presenca(usuario,episodio,datapresenca,repositorio) values (:nome,:episodio,:datapresenca,:repositorio)"
    let nome = {
      nome: user.user.login,
      episodio: episodio,
      datapresenca: new Date(user.created_at),
      repositorio: repositorio
    }

    knex.raw(inserir, nome).then(() => {
      console.log("inserido com sucesso!")
    }).catch((err) => {
      console.log(err)
    })
  }
}).catch((err) => console.log(err))

api.get("repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {

  users = ret.data.filter(e => e.user.login != "sombriks" && new Date(e.created_at) < new Date("2017-09-15") && e.body.includes("hellojs-s03"))

  for (user of users) {
    let repositorio = (user.body.slice(user.body.trim().indexOf("hellojs-s03e02")))
    let episodio = repositorio.slice(repositorio.lastIndexOf('e')).trim().replace(".git", "")
    let inserir = "insert into presenca(usuario,episodio,datapresenca,repositorio) values (:nome,:episodio,:datapresenca,:repositorio)"
    let nome = {
      nome: user.user.login,
      episodio: episodio,
      datapresenca: new Date(user.created_at),
      repositorio: repositorio
    }


    knex.raw(inserir, nome).then(() => {
      console.log("inserido com sucesso!")
    }).catch((err) => {
      console.log(err)
    })
  }
}).catch((err) => console.log(err))



