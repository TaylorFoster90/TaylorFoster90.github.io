var blogApp = angular.module('blog', ['ui.router', 'ngAnimate','ui.bootstrap'])
blogApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('about');
	$stateProvider
	.state('posts',{
		url: '/posts',
		templateUrl:'./posts.html',
		controller: 'PostsController'
	})
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
})
var posts = [
{
	head: "The Home Stretch",
	date: "2/25/2015",
	content: "Well, unfortunately I was not able to keep as up to date with this blog like I wanted to if you couldn't tell by the date of my previous post. But, I kind of have an excuse seeing as though The Iron Yard takes up literally all of my time. My knowledge of Front End programming has grown tremendously, which is why I was dieing to have some time to work this blog because it looked like complete sit until now. Of course, as I continue to learn more I will keep applying my knowledge to this website and others that I continue to work on. Anyways, I digress. It has been an amazing past month. I have learned so much about JavaScript and the different libraries it offers. I am not an expert by any means and I still have so much to learn but I am much more confident than I could have imagined I would be in just a month of really getting my hand dirty with JS. I still will hit walls and a lot of things are way over my head, but I know it will come with time and practice. We have about a week and a half of lecture left and the final three weeks are dedicated to the final project. I still have yet to decide what I would like to build for the final project, but I'm hoping something strikes me shortly. Wrapping up lecture is definitely a scaring feeling. I feel like I want to learn so much more but obviously there are only so many miracles Dave can conjure in just 2 and a half short months of lectures. What I have acquired though is the knowledge to teach myself and most of the time I am able to find what is it I need to be researching. I also believe I will learn A LOT from the final project. Having to build fully functional a web-application in just three weeks is going to be intense, not to mention having to present it at demo day on March 27. It excites me though, I am excited to take on the task and apply every bit of information I have absorbed into an application that will hopefully impress people and kickstart my search for employment after I graduate. We started working with Angular JS this week which really excites me because Angular is growing in popularity and demand. Speaking of which, it's been fun writing this post, but I have to go learn more Angular. Until next time.....hopefully not another month from now."
},
{
	head: "The Next Step",
	date: "1/25/2015",
	content: "This past week marked the introduction into the core of our class, what solidifies us as Front End Programmers, learning Javascript. It has been an intense week and a total wake up call. After two weeks of learning how to format and design websites, I felt like I was starting to get into a grove. With Javascript, the webpage becomes functional and has the possibility of running web applications using the language and learning how utilize it has changed the game. I do, however, love the challenge and learning JS has become an obsession. On a side note, this week I also was the start of me having to return to working on the weekends. This, as you can imagine, has invoked a whole new obstacle in this process. I write this blog post on a Sunday night, and if you can't already tell by the mediocre content in this post, I'm exhausted. Cramming my brain with JS as much as I possibly could this weekend in between work has put me on system overload. So, I think I'm going to spend the rest of tonight working on the layout of this blog. More to come folks, and a more lively Taylor. Goodnight."
},
{
	head: "The Journey Begins",
	date: "1/18/2015",
	content: "Hello and welcome! This blog will be my way to share with the world the major turning point in my life and the start of a new career. About two weeks ago, I started a program called The Iron Yard in which they produce junior level developers in a span of 3 very demanding months. These past two weeks has been a roller coaster of emotions. One minute your jumping for joy because you figured out something you've been working on for hours, and the next minute you banging your head against the desk saying 'WHY ISN'T THIS WORKING?!' It all comes with great reward though. Accomplishing a task that our instructor has given and truly feeling like you nailed it is a great feeling. I have no background in computer science nor have I ever really worked with a Mac very much. My background before The Iron yard was just working in the restaurant business ever since I had graduated highschool, with no real direction. Now two weeks in, I can build basic web page layouts using HTML, add styling using CSS and also navigate my way around my Mac using the command line. I absolutely love what I do and learning has never been this fun. I owe a big part of that to my instructor David Rogers who's teaching style is unlike any I have ever seen. He gives you the tools you need to answer your own questions. He forces you to think like a developer and research your questions instead of directly asking him. On a side note, no matter how hard you try he wont give you answer because 'The googles knows that.' The Iron Yard preaches companionship and unity and everyone in our cohort has adapted this concept. We all bounce ideas off each other and each one of us has something to offer. I am more than thrilled to be a part of this academy and look forward to further documenting my experience with you!",
},
]
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
blogApp.controller('PostsController', function($scope){
	$scope.posts = posts;
})
blogApp.controller('AboutController', function($scope,$timeout){
	$scope.images = images;
})
blogApp.controller('ContactController', function($scope){

})
