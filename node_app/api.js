import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as db from "./db-repo.js";

let app = express();			// Create an instance of the Express application
let dbRepo = db.databaseRepo();
const port = 3000;				// Specifies the port on which the server will listen

app.use(cors());				// Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json());		// Parse JSON request bodies

app.post("/addComponent", (req, res) => {		// Route for adding a component
	let data = req.body;
	let insertedComponent = dbRepo.insert(data);
	res.send(insertedComponent);
});

app.post("/updateComponent", (req, res) => {	// Route for updating a component
	let data = req.body;
	let updated = dbRepo.update(data);
	res.send(updated);
});

app.post("/deleteComponent", (req, res) => {	// Route for deleting a component
	let id = req.body.id;
	let result = dbRepo.delete(id);
	res.send(result);
});

app.get("/components", (req, res) => {			// Route for retrieving a list of components
	
	res.send(dbRepo.list());
});

app.listen(port, () => {							// Start the server and listen on the specified port
	console.log(`Server is running on port ${port}`);
	import("open")
		.then((open) => {
			open.default("../public/index.html");	// Open the specified HTML file in the default web browser
		})
		.catch((error) => {
			console.error("Failed to open the HTML file:", error);
		});
});
