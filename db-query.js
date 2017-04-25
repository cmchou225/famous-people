const db = require('./db');
const lastName = process.argv[2];

function getPerson (name) {
  db.connect((err, client) => {
    client.query('SELECT * FROM famous_people WHERE last_name = $1::text', [name], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
      client.end();
    });
  });
}

getPerson(lastName);







