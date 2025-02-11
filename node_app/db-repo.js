import { readFileSync, writeFileSync } from "fs";

export function databaseRepo () {
  let dbName = "database.json";
  let readDb = function () {
    let rawData = readFileSync(dbName);

    return JSON.parse(rawData);
  };

  return {
    update: function (component) {
      let dataJson = readDb();
      let componentToUpdate = dataJson.components.find(
        (x) => x.id === component.id
      );

      componentToUpdate.serial = component.serial;
      componentToUpdate.price = component.price;
      componentToUpdate.category = component.category;
      componentToUpdate.manufacturer = component.manufacturer;
      componentToUpdate.model = component.model;
      componentToUpdate.color = component.color;
      componentToUpdate.photo = component.photo;
      componentToUpdate.stock = component.stock;
      componentToUpdate.details = component.details;

      writeFileSync(dbName, JSON.stringify(dataJson, null, "\t"));

      return componentToUpdate;
    },

    insert: function (component) {
      let dataJson = readDb();
      let nextId = 0;

      for (const c of dataJson.components) {
        if (nextId <= c.id) nextId = c.id + 1;
      }

      component.id = nextId;

      dataJson.components.push(component);
      writeFileSync(dbName, JSON.stringify(dataJson, null, "\t"));

      return component;
    },

    list: function () {
      return readDb().components;
    },

    delete: function (id) {
      let dataJson = readDb();

      dataJson.components = dataJson.components.filter((x) => x.id != id);

      writeFileSync(dbName, JSON.stringify(dataJson, null, "\t"));

      return true;
    },
  };
}
