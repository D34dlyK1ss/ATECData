const express = require('express')
var cors = require('cors')
var app = express()
var dbRepo = require('./db-repo').databaseRepo();

const bodyParser = require('body-parser');
const port = 3000

app.use(cors())
app.use(bodyParser.json());

app.post('/addComponent', (req, res) => {
  let data = req.body;
  let insertedComponent = dbRepo.insert(data)
  res.send(insertedComponent);
});

app.post('/updateComponent', (req, res) => {
  let data = req.body;
  let updated = dbRepo.update(data);
  res.send(updated);
});

app.post('/deleteComponent', (req, res) => {
    let id = req.body.id;

    var result = dbRepo.delete(id)
    res.send(result ? 'OK' : 'NOK');
});

app.get('/components', (req, res) => {
  res.send(dbRepo.list())
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});