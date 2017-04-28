angular.module('starter.controllers', [])

.controller('HomeCtrl', function HomeCtrl($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function DictionaryCtrl($rootScope, $scope, ionicMaterialMotion, DictionaryFactory) {
	$rootScope.themeColor = "assertive";
	$scope.dictionary = DictionaryFactory;
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
	ionicMaterialMotion.ripple();
})

.controller('MessageCtrl', function MessageCtrl($rootScope, $scope, $state, ionicMaterialMotion, MessageFactory, MediaSrv) {
	$rootScope.themeColor = "energized";
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
		$scope.picture = [
			'orientacoes_fundo.jpg',
			'smile_fundo.jpg',
			'dictionary_fundo.jpg'
		].sort(function randomize() {
			return (Math.round(Math.random())-0.5);
		}).pop();
		MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
	};
	setTimeout($scope.refreshPage, 1000);
	ionicMaterialMotion.ripple();
})

.controller('AboutCtrl', function AboutCtrl($rootScope, $scope, ionicMaterialMotion, AboutFactory) {
	$rootScope.themeColor = "balanced";
	$scope.about = AboutFactory;
	ionicMaterialMotion.ripple();
});
