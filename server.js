// Imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Mongo connection
const connection_url = process.env.MONGODB_CONNECTION;

mongoose
	.connect(connection_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('MongoDB Connected!');
	})
	.catch((err) => {
		console.log(err);
	});

// ADD frontend react here

// App listening
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
