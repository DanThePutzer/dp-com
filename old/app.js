const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const path = require('path');

/* Server & Database */

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(4000, () => {
  console.log('Server online at Port 4000');
});

var db;

MongoClient.connect('mongodb://danceladus:Ferrarif12528491@ds143593.mlab.com:43593/dandata', (err, client) => {
  if (err) return console.log(err);
  db = client.db('dandata');

  
});