angular.module('starter.controllers', [])

.controller('HomeCtrl', function($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function($rootScope) {
	$rootScope.themeColor = "assertive";
})

.controller('MessageCtrl', function($rootScope) {
	$rootScope.themeColor = "energized";
})

.controller('PhilosophyCtrl', function($rootScope) {
	$rootScope.themeColor = "balanced";
});