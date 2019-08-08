
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cases', (table) => {
    table.increments();
    table.text('n_expte');
    table.text('autos');
    table.text('fuero');
    table.text('tribunal');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('cases');
};
