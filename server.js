//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var WishlistCard = require('./src/js/components/model/WishlistItem.js');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
mongoose.connect('mongodb://user1:password@ds231568.mlab.com:31568/mecomm-dev');
console.log("Success!");
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({
        message: 'API Initialized!'
    });
});
//Use our router configuration when we call /api
app.use('/meComm', router);
//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});
//adding the /comments route to our /api router
router.route('/userItems')
        //retrieve all comments from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        WishlistCard.find(function(err, items) {
            if (err){
                res.send(err);
            }
            //responds with a json object of our database comments.
            res.json(items)
        });
    });
