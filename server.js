var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
var bson = require('bson');
var app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
app.use(passport.initialize());
app.use(session({secret: 'wolverinePack'}));
app.use(passport.session());

//Controllers 
var QueueCtrl = require('./controllers/QueueCtrl');
var UserCtrl = require('./controllers/UserCtrl');

//Models
var User = require('./models/User');
var Location = require('./models/Location');
var Customer = require('./models/Customer');


// User
passport.use('local', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {

        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err) return done(err);

                // if no user is found, return the message
                if (!user) return done(('No user found.'));
                // password is incorrect
                user.verifyPassword(password).then(function(doesMatch){
        		if(doesMatch) done(null, user);
        		else done(('Incorrect Password'))
                	})
            })
        });

    }));

//Middleware for Passport
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


//login requirement for page to be viewed
var requireAuth = function(req, res, next){
	if(!req.isAuthenticated()){
		return res.status(401).end(); 
	}
	console.log(req.user); 
	next();
}

// Auth Endpoints --------------------------------
//Sign Up && Add User 
app.post('/api/users/', UserCtrl.createUser);

//Local Login Endpoint

app.post('/api/users/auth', passport.authenticate('local'), function(req, res) {
	return res.json({message: "you logged in"});
});

//logout
app.post('/api/auth/logout', function(req, res){
	req.logout();
	return res.status(200).json({message: "Logged Out"}).end();
})

/* Endpoints 
**********************************************************************/
app.get('/selection', passport.authenticate('local'), function(req, res) {
    res.redirect(request.session.returnTo || '/selection');
});


app.post('/api/:location/queue/', QueueCtrl.add); 
app.get('api/:location/queue/', QueueCtrl.getByLocation);

// app.post('api/scraper', ScraperCtrl.saveScrape); 

//Database Connection 
mongoose.connect('mongodb://localhost/fashionphile');

//Server Port 
var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
	console.log("The Wolverine Pack is hunting on port ", port); 
});
