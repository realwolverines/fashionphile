angular.module('fashionphile').service('LocationService', function($http, $q) {

	this.signup = function(email, password, name) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users',
			data:  {
				email: email,
				password: password
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		}).catch(function(res) {
			deferred.reject(res.data);
		});
		return deferred.promise;
	};

	this.login = function(email, password) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users/auth',
			data:  {
				email: email,
				password: password
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		}).catch(function(res) {
			deferred.reject(res.data);
		});
		return deferred.promise;
	};
});