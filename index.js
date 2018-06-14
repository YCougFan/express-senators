const express = require('express');
const app = express();

const senators = require('./data/senators');

app.get('/', (req, res) => res.send('Welcome to the Senate!'));

app.get('/republican', (req, res) => res.send(senators.filter(Senator => Senator.party === "Republican")));

app.get('/democrat', (req, res) => res.send(senators.filter(Senator => Senator.party === "Democrat")));

app.get('/male', (req, res) => res.send(senators.filter(Senator => Senator.person.gender === "male")));

app.get('/female', (req, res) => res.send(senators.filter(Senator => Senator.person.gender === "female")));

app.get('/state/:state', (req, res) => res.send(senators.filter(Senator => Senator.state === req.params.state)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));