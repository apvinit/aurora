const express = require('express');
const bodyParser = require('body-parser');

// create the app
const app = express();

// parse request of content-type
app.use(bodyParser.urlencoded({ extended: true }));

// parse request of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Error connecting to the database!,', err);
  });

// Handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
