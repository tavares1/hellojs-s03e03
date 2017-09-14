const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: "./hello.sqlite"
    }
  });
module.exports = knex;