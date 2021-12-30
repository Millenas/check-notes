
exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.boolean('status').notNull()
        table.datetime('estimateAt')
        table.datetime('doneAt')
        table.integer('listId').references('id')
            .inTable('lists').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks')
};
