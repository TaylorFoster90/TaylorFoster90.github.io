var images = {
	angular: './img/angular.jpg',
	firebase: './img/firebase.png',
	github: './img/github.png',
	jquery:	'./img/jquery.png',
	strap: './img/bootstrap.png',
	node: './img/nodejs.png',
	sass: './img/sass.jpg',
	vue: './img/vue.png',
	lodash: './img/lodash.png',
	javascript: './img/js.jpeg',
	wordpress: './img/wordpress.jpeg',
	php: './img/php.png'
};
var blogApp = angular.module('blog', ['ngAnimate','ui.bootstrap'])
.controller('MainController', function($scope,$interval,$timeout){
	$scope.clockShow = true;
	$scope.time = 0;
	$scope.preventDouble = true;
	$scope.date = new Date();
	$scope.startColors = function(){
		$scope.preventDouble = false;
		$scope.intervalPromise = $interval(function(){
			$scope.r = Math.round(Math.random()*255).toString();
			$scope.b = Math.round(Math.random()*255).toString();
			$scope.g = Math.round(Math.random()*255).toString();
		},1300)
	}
	$scope.stopColors = function(){
		$scope.preventDouble = true;
		$interval.cancel($scope.intervalPromise);
	}
	$interval(function(){
			$scope.clock = $scope.date;
	}, 1000)
	$scope.weekDay = $scope.date.getDay();
	$scope.images = images;
})
