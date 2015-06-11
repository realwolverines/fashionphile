var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var q = require('q');

var userSchema = new Schema({
	name: {type: String},
	email: {type: String},
	password: {type: String},
	// role: {type: String, enum: ["admin", "employee"]},
	location: {type: String}
});

//pre('save') is mongoose middleware that runs before every user is created
userSchema.pre('save', function(next) {
	var user = this;
	//take password and encrypt it
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			console.log(hash);
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.verifyPassword = function(password) {
	var deferred = q.defer();
	var user = this;
	bcrypt.compare(password, user.password, function(err, res) {
		if (err) {
			deferred.resolve(false);
		}
		deferred.resolve(true);
	});
	return deferred.promise;
};

module.exports = mongoose.model('User', userSchema);