
exports.up = function(knex, Promise) {
  return knex("cachorro").insert([{"nomecachorro":"lulu"},{"nomecachorro":"osmarilo"}])
};

exports.down = function(knex, Promise) {
  return knex("cachorro").where({"nomecachorro":"lulu"}).del()
    .then(()=>{
      return knex("cachorro").where({"nomecachorro":"osmarilo"}).del()
    }).catch((err)=>{
      console.log(err)
    })
  }  
