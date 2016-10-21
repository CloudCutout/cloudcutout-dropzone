const express = require('express');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const app = express();

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,cache-control');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.post('/', function(req, res){
    console.log('POST /');

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = false;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('progress', function(b, e){
      console.log(b+' of '+e);

  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    if (Math.random() < 0.5) {
        res.writeHead(400);
        res.end('File type not supported');
    } else {
      res.end('success');
    }
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)