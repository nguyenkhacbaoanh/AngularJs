var app = angular.module("myApp", []);

// main controller:
app.controller("data",["$scope", "$http", "$log", function($scope, $http, $log) {

	// $scope.question = "";
	$http.get("https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions2.json").then(
		 	function(res) {
		 		$scope.questions = res.data["games"][0]["questions"]; // we have 15 questions
		 		return $scope.questions;
		 	},
		 	function(res) {
		 		$log.log("Something wrong !");
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

	$scope.reponseQ = function(choice) {
		if ($scope.content.indexOf(choice) === $scope.correct) {
			angular.element(document.querySelectorAll(".choice p")[$scope.content.indexOf(choice)]).addClass("right-reponse");
			angular.element($("#reponse")).text("Right");
		} else {
			angular.element($("#reponse")).text("Wrong !");
			angular.element(document.querySelectorAll(".choice p")[$scope.content.indexOf(choice)]).css({"color": "white"});
		}
	};
}]);