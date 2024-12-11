
exports.up = function(knex) {
    return knex.schema.table('todos', function(table) {
        table.bigInteger('CreatedById')
            .unsigned()
            .index()
            .references('id')
            .inTable('users');
        table.bigInteger('AssignedToId')
            .unsigned()
            .index()
            .nullable()
            .references('id')
            .inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.table('todos', function(table) {
        table.dropColumn('CreatedById');
        table.dropColumn('AssignedToId');
    });
};
