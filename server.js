// Imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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

// Production site variable
// Change to 1 if the app is being deployed into a production environment
const liveSite = 0;

// Uses the production build of the React front-end if the app is being deployed into a production environment
if (liveSite === 1) {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express serves up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

// App listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
