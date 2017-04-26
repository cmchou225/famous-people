const db = require('./knexDb');
const firstName = process.argv[2];
const lastName = process.argv[3];
const Dob = process.argv[4];


function addPerson (firstName, lastName, Dob) {
  db.knex('famous_people').insert({first_name: firstName, last_name: lastName, birthdate: Dob}).then(() => {
      console.log('Inserted!');
    }).catch((err) => console.log('error', err)).then(db.knex.destroy());
}

addPerson(firstName, lastName, Dob);







