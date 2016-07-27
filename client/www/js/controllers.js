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
	$scope.dictionary = DictionaryFactory;
	ionicMaterialMotion.ripple();
})

.controller('MessageCtrl', function ($rootScope, $scope, ḾessageFactory, MediaSrv) {
	$rootScope.themeColor = "energized";
	$scope.message = ḾessageFactory;
	MediaSrv.loadMedia('audio/' + $scope.message.filename, null, null, function onStop() {
		document.getElementById("btn-pause").classList.add("hide");
		document.getElementById("btn-play").classList.remove("hide");
	}).then(function(media){
		$scope.message.media = media;
	});
})

.controller('AboutCtrl', function ($rootScope) {
	$rootScope.themeColor = "balanced";
});
