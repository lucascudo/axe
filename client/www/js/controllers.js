angular.module('starter.controllers', [])

.controller('HomeCtrl', function ($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function ($rootScope, $scope, ionicMaterialMotion, DictionaryFactory) {
	$rootScope.themeColor = "assertive";
	$scope.toggleGroup = function (group) {
		if ($scope.isGroupShown(group)) {
		  $scope.shownGroup = null;
		} else {
		  $scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function (group) {
		return $scope.shownGroup === group;
	};
	$scope.dictionary = DictionaryFactory.getDictionary();
	ionicMaterialMotion.ripple();
})

.controller('MessageCtrl', function ($rootScope, $scope) {
	$rootScope.themeColor = "energized";
	$scope.message = {
        text: 'Ainda não possuímos mensagens personalizadas =(',
        author: 'ROCHA, Lucas T.'
    };
})

.controller('PhilosophyCtrl', function ($rootScope) {
	$rootScope.themeColor = "balanced";
});