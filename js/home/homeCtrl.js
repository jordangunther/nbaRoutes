var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService){
	$scope.jazz = {};
	$scope.jazz.image = 'images/jazz-logo.png';
	$scope.lakers = {};
	$scope.lakers.image = 'images/lakers-logo.png';
	$scope.heat = {};
	$scope.heat.image = 'images/heat-logo.png';
	homeService.getTeamData('utahjazz').then(function(res){
		$scope.jazzData = res;
		console.log($scope.jazzData);

	});
	homeService.getTeamData('losangeleslakers').then(function(res){
		$scope.lakersData = res;
	});
	homeService.getTeamData('miamiheat').then(function(res){
		$scope.heatData = res;
	});
	
});
