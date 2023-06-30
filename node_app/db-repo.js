const fs = require('fs');

exports.databaseRepo = function() {
	let dbName = 'database.json';
	let readDb = function() {
		let rawData = fs.readFileSync(dbName);

		return JSON.parse(rawData);
	};

	return {
		update: function(component) {     
			let dataJson = readDb();
			let componentToUpdate = dataJson.components.find(x => x.Id === component.Id);

			componentToUpdate.serial = component.serial;
			componentToUpdate.price = component.price;
			componentToUpdate.category = component.category;
			componentToUpdate.manufacturer = component.manufacturer;
			componentToUpdate.model = component.model;
			componentToUpdate.color = component.color;
			componentToUpdate.photo = component.photo;
			
			fs.writeFileSync(dbName, JSON.stringify(dataJson, null, '\t'));

			return componentToUpdate;
		},

		insert: function(component) {
			let dataJson = readDb();
			let nextId = dataJson.lastId++;

			component.Id = nextId;
			dataJson.components.push(component);
			fs.writeFileSync(dbName, JSON.stringify(dataJson, null, '\t'));
			
			dataJson.lastId = nextId;

			return component;
		},

		list: function() {
			return readDb().components;
		},

		delete: function(id) {
			let dataJson = readDb();

			dataJson.components = dataJson.components.filter(x => x.Id != id);

			fs.writeFileSync(dbName, JSON.stringify(dataJson, null, '\t'));

			return true;
		}
	}
};