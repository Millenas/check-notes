
exports.up = function (knex, Promise) {
    return knex.schema.createTable('lists', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.integer('taskerId').references('id')
            .inTable('taskers').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('lists')
};
