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
	javascript: './img/js.jpeg'
};
var blogApp = angular.module('blog', ['ui.router', 'ngAnimate','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('about');
	$stateProvider
	.state('about',{
		url: '/about',
		templateUrl: './about.html',
		controller: 'AboutController'
	})
	.state('contact',{
		url: '/contact',
		templateUrl: './contact.html',
		controller: 'ContactController'
	})
	.state('resume', {
		url: '/resume',
		templateUrl: './resume.html',
		controller: 'ContactController'
	})
	.state('toys', {
		url: '/toys',
		templateUrl: 'toys.html',
		controller: 'ToyController'
	})
})
.controller('AboutController', function($scope,$timeout){
	$scope.images = images;
})
.controller('ContactController', function($scope){

})
.controller('ToyController', function($scope,$interval,$timeout){
	$scope.time = 0;
	$scope.preventDouble = true;
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
	$scope.computerChoice = [];
	$scope.userChoice = [];
	$scope.computerTurn = function(){
		var newPick = Math.random() * 4;
		if(newPick<=1){
			$scope.computerChoice.push('red')
		}else if(newPick<=2){
			$scope.computerChoice.push('yellow')
		}else if(newPick<=3){
			$scope.computerChoice.push('blue')
		}else if(newPick<=4){
			$scope.computerChoice.push('green')
		}
		console.log($scope.computerChoice)
	}
})
