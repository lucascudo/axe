angular.module('starter.controllers', [])

.controller('HomeCtrl', function HomeCtrl() {})

.controller('DictionaryCtrl', function DictionaryCtrl($scope, ionicMaterialMotion, DictionaryFactory) {
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

.controller('MessageCtrl', function MessageCtrl($scope, $state, MessageFactory, MediaSrv) {
	$scope.refreshPage = function refreshPage() {
		function onMediaError(err) { console.log(err); }
		function onMediaSuccess(media) { $scope.message.media = media; }
		function onMediaStop() {
			document.getElementById("btn-pause").classList.add("hide");
			document.getElementById("btn-play").classList.remove("hide");
		}
		var mfCopy = MessageFactory.slice();
    	$scope.message = mfCopy.sort(function randomize() {
			return (Math.round(Math.random())-0.5);
		}).pop();
		MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
	};
	$scope.refreshPage();
})

.controller('AboutCtrl', function AboutCtrl($scope, AboutFactory) {
	$scope.about = AboutFactory;
});
