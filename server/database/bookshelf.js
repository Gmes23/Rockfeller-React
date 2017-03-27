const knex = require('knex');
const knexconfig = require('../../knexfile');
const bookshelf = require('bookshelf');

module.exports = bookshelf(knex(knexconfig.development));