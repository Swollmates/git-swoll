exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1;')
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    id: 1,
                    first_name: 'Aaron',
                    last_name: 'Goodman',
                    email: 'amgoodman5@gmail.com',
                    password: 'aaron',
                    joined: new Date(),
                    is_active: true
                }),
                knex('user').insert({
                    id: 2,
                    first_name: 'Michael',
                    last_name: 'Roque',
                    email: 'mycroquet@gmail.com',
                    password: 'michael',
                    joined: new Date(),
                    is_active: true
                }),
                knex('user').insert({
                    id: 3,
                    first_name: 'Matt',
                    last_name: 'Winzer',
                    email: 'matt.winzer@gmail.com',
                    password: 'matt',
                    joined: new Date(),
                    is_active: true
                })
            ]);
        });
};
