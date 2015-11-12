angular.module('starter.controllers', ['ionic', 'ionic-material'])

.controller('HomeCtrl', function($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function($rootScope, ionicMaterialInk, ionicMaterialMotion, $ionicSideMenuDelegate, $timeout) {
	$rootScope.themeColor = "assertive";
	ionicMaterialMotion.ripple();
})

.controller('MessageCtrl', function($rootScope) {
	$rootScope.themeColor = "energized";
})

.controller('PhilosophyCtrl', function($rootScope) {
	$rootScope.themeColor = "balanced";
});