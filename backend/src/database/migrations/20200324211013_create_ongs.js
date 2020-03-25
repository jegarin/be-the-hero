/* eslint-disable prefer-arrow-callback */
exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex) {
  knex.schema.dropTable('ongs');
};
