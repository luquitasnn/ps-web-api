
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
        {id: 1, n_expte: '123/2020', autos: 'ALbert vs Mauri', fuero: 'Judicial', tribunal: '1'},
        {id: 2, n_expte: '101/2019', autos: 'Micho vs Tito', fuero: 'Penal', tribunal: '2'},
      ]);
    });
};
