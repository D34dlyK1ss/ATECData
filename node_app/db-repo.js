const fs = require('fs');

exports.databaseRepo = function () {
    let dbName = 'database.json';
    let readDb = function() {
        let rawData = fs.readFileSync(dbName);

        return JSON.parse(rawData);
    };

    return {
        update: function(item) {
            let dataJson = readDb();
            let itemToUpdate = dataJson.items.find(x => x.Id === item.Id);

            itemToUpdate.id = item.id;
            itemToUpdate.price = item.price;
            itemToUpdate.category = item.category;
            itemToUpdate.manufacturer = item.manufacturer;
            itemToUpdate.model = item.model;
            fs.writeFileSync(dbName, JSON.stringify(dataJson, null, 2));

            return itemToUpdate;
        },

        insert: function(item) {
            let dataJson = readDb();
            let nextId = 1;

            for (const item of dataJson.items) {
                if(nextId <= item.Id) nextId = item.Id;
            }

            nextId++;
            item.Id = nextId;
            dataJson.items.push(item);            
            fs.writeFileSync(dbName, JSON.stringify(dataJson, null, 2));
            return item;
        },

        list: function() {
            return readDb().items;
        },

        delete: function(id) {
            let dataJson = readDb();

            dataJson.items = dataJson.items.filter(x => x.Id != id);
            fs.writeFileSync(dbName, JSON.stringify(dataJson, null, 2));

            return true;
        },

        listSampleData: function(onResponse){
            fs.readFile('product_list.json', 'utf8', onResponse);
        }
    }
};