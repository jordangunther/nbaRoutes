var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function(teamData, $scope, $routeParams, teamService){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.teams = ["Boston Celtics", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Detroit Pistons", "Indiana Pacers", "Milwaukee Bucks", "Atlanta Hawks", "Charlotte Hornets", "Miami Heat", "Orlando Magic", "Washington Wizards", "Dallas Mavericks", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "San Antonio Spurs", "Denver Nuggets", "Minnesota Timberwolves", "Portland Trail Blazers", "Oklahoma City Thunder", "Utah Jazz", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings"];
	$scope.showNewGameForm = false;
	if($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logPath = 'images/jazz-logo.png';
	} else if ($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logPath = 'images/lakers-logo.png';
	} else if ($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logPath = 'images/heat-logo.png';
	}
	$scope.toggleNewGameForm = function(){
		if($scope.showNewGameForm === false) {
			$scope.showNewGameForm = true;
		}
	}
	$scope.submitGame = function(){
		$scope.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		$scope.newGame.homeTeam = $scope.homeTeam;
		teamService.addNewGame($scope.newGame).then(function(res){
			teamService.getTeamData($scope.newGame.homeTeam).then(function(res){
				$scope.teamData= res;
				console.log(res)
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			})
		})
	}
});