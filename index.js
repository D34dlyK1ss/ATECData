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

app.get('/people', (req, res) => {
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

function addRow() {
    let img = document.getElementById('image').value;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;
    let warn = '';

    if (img.length < 3) warn += 'Image is invalid \n';
    if (name.length < 3) warn += 'Name is invalid \n';
    if (category.length < 3) warn += 'Category is invalid';
    if (description.length < 3) warn += 'Description is invalid';

    if (warn != '') alert(warn);

    else {
        document.getElementById('tb').innerHTML += '<tr>' + '<td>' + img + '</b>' + '<td>' + name + '</b>' +
            '<td>' + category + '</b>' + '<td>' + img + '</b>' + '<td>' + '</tr>';
    }
}