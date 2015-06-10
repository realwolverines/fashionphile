var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
var mongoDbQueue = require('mongodb-queue');

var app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
app.use(passport.initialize());
app.use(session({secret: 'wolverinePack'}));
app.use(passport.session());

//Controllers 
var BookmarksCtrl = require('./controllers/BookmarksCtrl'); 

//Models
var User = require('./models/User');

//Configuration Files 
var configAuth = require('./config/auth'); 

//Auth -- Local Strategy 
passport.use(new LocalStrategy({
	usernameField: 'email'
}, function(email, password, done) {
	//define how we match user credentials to db values
	User.findOne({ email: email }, function(err, user){
		if (!user) {
			done(new Error("This user does not exist"));
		}
		user.verifyPassword(password).then(function(doesMatch) {
			if (doesMatch) {
				done(null, user);
			}
			else {
				done(new Error("Please verify your password and try again."));
			}
		});
	});
}));


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

//TODO: Figure out how to access admin role from user model
// var requireAdmin = function(req, res, next){
//   if(!req.user.role === "admin"){
//     return res.status(401).end();
//   }
//   console.log(req.user); 
//   next(); 
// }

//Auth Endpoints 
//Sign Up && Add User 
app.post('/api/users', function(req, res) {
	console.log("users api hit"); 
	User.findOne({ email: req.body.email }).exec().then(function(user) {
		//if we found a user, it's a duplicate
		if (user) {
			return res.status(400).json({message: "User with this email already exists."});
		}
		//if the user's password is too short ...
		if (req.body.password.length <= 4) {
			return res.status(400).json({message: "Your password must be longer than 4 characters."});
		}
		//otherwise, create the user
		var user = new User(req.body);
		user.save(function(err, new_user) {
			if (err) {
				console.log("can't create user", err);
			}
			res.json(new_user);
		});
	})
});

//Local Login Endpoint
app.post('/api/users/auth', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	return res.json({message: "you logged in"});
});

//logout
app.get('/api/auth/logout', function(req, res){
	req.logout(); 
	return res.status(200).json({message: "Logged Out"}).end(); 
})

/* End of Auth Endpoints ****************************************************/


//Database Connection 
mongoose.connect('mongodb://localhost/fashionphile');

//Server Port 
var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
	console.log("The Wolverine Pack is hunting on port ", port); 
});
