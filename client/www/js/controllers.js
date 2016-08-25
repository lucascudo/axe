angular.module('starter.controllers', [])

.controller('HomeCtrl', function HomeCtrl($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function DictionaryCtrl($rootScope, $scope, ionicMaterialMotion, DictionaryFactory) {
	$rootScope.themeColor = "assertive";
	$scope.toggleGroup = function toggleGroup(group) {
		if ($scope.isGroupShown(group)) {
		  $scope.shownGroup = null;
		} else {
		  $scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function isGroupShown(group) {
		return $scope.shownGroup === group;
	};
	$scope.dictionary = DictionaryFactory;
	ionicMaterialMotion.ripple();
})

.controller('MessageCtrl', function MessageCtrl($rootScope, $scope, ḾessageFactory, MediaSrv) {
	function onMediaStop() {
		document.getElementById("btn-pause").classList.add("hide");
		document.getElementById("btn-play").classList.remove("hide");
	}
	function onMediaSuccess(media) { $scope.message.media = media; }
	function onMediaError(err) { console.log(err); }
	$rootScope.themeColor = "energized";
	$scope.message = ḾessageFactory;
	
	MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
})

.controller('AboutCtrl', function AboutCtrl($rootScope) {
	$rootScope.themeColor = "balanced";
});
