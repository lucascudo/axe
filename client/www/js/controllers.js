angular.module('starter.controllers', [])

.controller('HomeCtrl', function($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function($rootScope, $scope, ionicMaterialMotion, DictionaryFactory) {
	$rootScope.themeColor = "assertive";
	ionicMaterialMotion.ripple();
	$scope.dictionary = DictionaryFactory.getDictionary();
})

.controller('MessageCtrl', function($rootScope) {
	$rootScope.themeColor = "energized";
})

.controller('PhilosophyCtrl', function($rootScope) {
	$rootScope.themeColor = "balanced";
});