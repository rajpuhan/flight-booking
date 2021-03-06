var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
  var routes = require('./routes/router.js'); //importing route
  routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);