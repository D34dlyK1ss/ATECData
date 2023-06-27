const express = require('express');
let cors = require('cors');
let app = express();
let dbRepo = require('./dbrepo').databaseRepo();
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/addItem', (req, res) => {
  let data = req.body;
  let insertedItem = dbRepo.insert(data);

  res.send(insertedItem);
});

app.post('/updateItem', (req, res) => {
  let data = req.body;
  let updated = dbRepo.update(data);

  res.send(updated);
});

app.post('/deleteItem', (req, res) => {
    let id = req.body.id;
    let result = dbRepo.delete(id);

    res.send(result ? 'OK' : 'NOK');
    // res.send('api request' + id);
});

app.get('/items', (req, res) => {
  res.send(dbRepo.list());
});

// app.get('/sample', (req, res) => {
//   dbRepo.listSampleData(function(err, data){
//     let dictJson = JSON.parse(data);
//     res.send(dictJson)
//   })
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});