var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
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

//Google Auth Start
passport.use(new GoogleStrategy({
        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,
    },
    
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new User();

                    // set all of the relevant information
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));

// send to google to do the authentication
app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect : '/',
        failureRedirect : '/login'
    }));
//End of Google Auth



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

//Login

//Local 
app.post('/api/users/auth', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	return res.json({message: "you logged in"});
});

//logout
app.get('/api/auth/logout', function(req, res){
	req.logout(); 
	return res.status(200).json({message: "Logged Out"}).end(); 
})


//End of Auth Endpoints 

//Favorite Bookmarks


//Endpoints 
app.get('/api/:user_id/bookmarks', BookmarksCtrl.getBookmarks); 
app.post('/api/:user_id/bookmarks', BookmarksCtrl.addBookmark); 
app.post('/api/:user_id/bookmarks', BookmarksCtrl.addFolder); 
//Database Connection 
mongoose.connect('mongodb://localhost/fashionphile');

//Server Port 
var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
	console.log("The Wolverine Pack is hunting on port ", port); 
});
