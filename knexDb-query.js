const db = require('./knexDb');
const lastName = process.argv[2];

function getPerson (name) {
  db.knex.select().from('famous_people').where('first_name', name).then((result) => {
      console.log(result);
    }).catch((err) => console.log('error', err)).then(db.knex.destroy());
}

getPerson(lastName);







