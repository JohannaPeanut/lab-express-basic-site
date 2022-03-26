
const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials')

// will return an object
const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'María Ybarra';

app.get('/about', (request, response) => {
  response.render('about')
});

app.get('/works', (request, response) => {
  response.render('works')
});

app.get('/home', (request, response) => {
  response.render('home')
});

app.get('/', (request, response) => {
  response.render('home')
});

app.get('*', (request, response) => {
  response.render('home')
});

app.listen(3001);