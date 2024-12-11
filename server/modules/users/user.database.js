const knex = require("../../database/connection");

async function get(id) {
    const results = await knex('users').where({ id });
    return results[0];
}

async function create(name) {
    const results = await knex('users').insert({ name }).returning('*');
    return results[0];
}

module.exports = {
    get,
    create
}