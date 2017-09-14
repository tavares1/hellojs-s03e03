
exports.up = function(knex, Promise) {
    return knex.schema.table("cachorro",(table)=>{
        table.string("racacachorro")
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorro",(table)=>{
      table.dropColumn("racacachorro")
  })
}
