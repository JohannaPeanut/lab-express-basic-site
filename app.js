const { response } = require('express');
const express = require('express');

// will return an object
const app = express();

app.use(express.static('public'));

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3001);