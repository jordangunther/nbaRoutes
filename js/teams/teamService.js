var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj) {
		console.log('add' + gameObj)
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		console.log(gameObj);
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		console.log("won? " + gameObj.won);
		return $http ({
			method: 'POST',
			url: url,
			data: gameObj
		})
	}
	this.getTeamData = function(team) {
		var defer = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http({
			method: 'GET',
			url: url
		}).then(function(data){
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++){
				if(results[i].won === true){
					wins++;
				} else if (results[i].won != true) {
					losses++;
				} 
			}
			results.won = wins;
			results.losses = losses;
			defer.resolve(results);
		})
		return defer.promise;
	}
});