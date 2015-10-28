var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj) {
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		return $http = {
			method: 'POST',
			url: url,
			data: gameObj
		}
	}
	this.getTeamData = function(team) {
		var defer = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http = {
			method: 'GET',
			url: url,
		}.then(function(data){
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++){
				if(results.won === true){
					wins++;
				} else if (results.won != true) {
					losses++;
				} 
			}
			results.win = wins;
			results.losses = losses;
			defer.resolve(results);
		})
		return defer.promise;
	}
});