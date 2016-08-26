angular.module('starter.controllers', [])

.controller('HomeCtrl', function HomeCtrl($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function DictionaryCtrl($rootScope, $scope, ionicMaterialMotion, DictionaryFactory) {
	$rootScope.themeColor = "assertive";
	$scope.dictionary = DictionaryFactory;
	ionicMaterialMotion.ripple();
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
})

.controller('MessageCtrl', function MessageCtrl($rootScope, $scope, $state, MessageFactory, MediaSrv) {
	function onMediaSuccess(media) { $scope.message.media = media; }
	function onMediaError(err) { console.log(err); }
	function onMediaStop() {
		document.getElementById("btn-pause").classList.add("hide");
		document.getElementById("btn-play").classList.remove("hide");
	}
	function refreshPage() {
		$scope.message = MessageFactory.sort(function () {
			return (Math.round(Math.random())-0.5);
		}).pop();
	}
	refreshPage();
	$scope.refreshPage = refreshPage;
	$rootScope.themeColor = "energized";
	MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
})

.controller('AboutCtrl', function AboutCtrl($rootScope) {
	$rootScope.themeColor = "balanced";
});
