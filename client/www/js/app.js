// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
	'ionic',
	'ionic-material',
	'starter.controllers',
	'starter.factories',
	'starter.directives'
])

.run(function($ionicPlatform, $rootScope) {
	
	$rootScope.goOutside = function (url, target) {
		target = target || "_system";
		window.open(url, target);
	};
	
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
	  
  .state('about', {
    url: '/about',
	controller: 'AboutCtrl',
	templateUrl: 'templates/about.html'
  })
  
  .state('home', {
    url: '/home',
	cache: false,
	controller: 'MessageCtrl',
	templateUrl: 'templates/message.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
