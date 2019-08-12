const knex = require('./knex'); // The connection!

module.exports = {
    getAll() {
        return knex('cases');
    },

    getCaseByID(id) {
        return knex('cases').where('id', id).first();
    },

    create(myCase) {
        return knex('cases').insert (myCase, '*');
    },

    update(myCase) {
        return knex('cases').where ('id', myCase.id).update (myCase, '*');
    },

    delete(id){
        return knex('cases').where('id', id).del();
    }
}
