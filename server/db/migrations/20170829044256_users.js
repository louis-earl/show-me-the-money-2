exports.up = function (knex) {
  knex.schema.dropTableIfExists('users')
    .then(() => {
      return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('hash')
        table.string('first_name')
        table.string('last_name')
        table.decimal('hourly_wage')
        table.timestamps(true, true)
      })
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
