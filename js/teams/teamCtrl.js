var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function(teamData, $scope, $routeParams, teamService){
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function(){
		if($scope.showNewGameForm === false) {
			$scope.showNewGameForm = true;
		}
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
	}
	$scope.submitGame = function(){
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope,newGame).then(function(res){
			teamService.getTeamData($scope.newGame.homeTeam).then(function(res){
				$scope.newGame = {};
				$scope.ShowNewGameForm = false;
			})
		})
	}
});