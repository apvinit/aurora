const express = require('express');
const bodyParser = require('body-parser');

// create
const app = express();

// parse request of content-type
app.use(bodyParser.urlencoded({ extended: true }));

// parse request of content-type - application/json
app.use(bodyParser.json());

// Handle production
if(process.env.NODE_ENV === 'production'){
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
