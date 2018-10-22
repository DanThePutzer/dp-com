
// Setting up Express
const express = require('express')
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Server online at Port 3000');
});