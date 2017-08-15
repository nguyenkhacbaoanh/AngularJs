var app = angular.module("myApp", []);

// main controller:
app.controller("data",["$scope", "$http", function($scope, $http) {

	// $scope.question = "";
	$http.get("https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions2.json").then(
		 	function(data) {
		 		$scope.questions = data.data["games"][0]["questions"]; // we have 15 questions
		 		return $scope.questions;
		 	},
		 	function(data) {
		 		console.log("Something wrong !");
		 	});

	$scope.questionCurrent = -1;

	$scope.displayQ = function () {
		$scope.questionCurrent ++;
		if ($scope.questionCurrent === 15) {
			$scope.questionCurrent = 0;
		}

		$scope.question = $scope.questions[$scope.questionCurrent].question;
		$scope.content =  $scope.questions[$scope.questionCurrent].content;
		$scope.correct = $scope.questions[$scope.questionCurrent].correct;
	}; 
}]);