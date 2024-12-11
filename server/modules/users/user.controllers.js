const _ = require('lodash');
const usersdb = require('./user.database.js');

function createUser(req, data) {
    const protocol = req.protocol,
        host = req.get('host'),
        id = data.id;

    return {
        id: data.id,
        name: data.name,
        url: `${protocol}://${host}/${id}`
    };
}

async function getUser(req, res) {
    const user = await usersdb.get(req.params.id);
    return res.send(user);
}

async function postUser(req, res) {
    const created = await usersdb.create(req.body.name);
    return res.send(createUser(req, created));
}

function addErrorReporting(func, message) {
    return async function(req, res) {
        try {
            return await func(req, res);
        } catch(err) {
            console.log(`${message} caused by: ${err}`);

            // Not always 500, but for simplicity's sake.
            res.status(500).send(`Opps! ${message}.`);
        }
    }
}

const toExport = {
    getUser: { method: getUser, errorMessage: "Could not fetch user" },
    postUser: { method: postUser, errorMessage: "Could not post user" },
}

for (let route in toExport) {
    toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
}

module.exports = toExport;
