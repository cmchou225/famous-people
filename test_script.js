const pg = require('pg');
const settings = require('./settings');
const lastName = process.argv[2];
const db = require('./db-query.js');

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.connect((err) => {
  if(err) {
    return console.error('connection error', err);
  }
  db.getPerson(lastName, (data) =>{
    console.log('data', data, 'typeof', typeof data);
  })

});
