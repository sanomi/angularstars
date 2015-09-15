import angular from "angular";
let app = angular.module("planetList", []);

app.controller('planetCtrl', function($scope, $http) {
	$scope.planetArr = [];
	for (let n=1;n<=7;n++){
		$http.get(`http://swapi.co/api/planets/?form=json&page=${n}`)
		.success( data => {
			for (let i in data.results) {
			$scope.planet = {name: data.results[i].name, url: data.results[i].url}
			$scope.planetArr.push($scope.planet)
			}
			console.log($scope.planetArr)
			return $scope.planetArr;	

		});
	}

})