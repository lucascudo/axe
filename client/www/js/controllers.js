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

.controller('MessageCtrl', function MessageCtrl($rootScope, $scope, $state, $localstorage, ionicMaterialMotion, MessageFactory, MediaSrv) {
	$rootScope.themeColor = "energized";
	$scope.refreshPage = function refreshPage() {
		function onMediaError(err) { console.log(err); }
		function onMediaSuccess(media) { $scope.message.media = media; }
		function onMediaStop() {
			document.getElementById("btn-pause").classList.add("hide");
			document.getElementById("btn-play").classList.remove("hide");
		}

		let mfCopy = MessageFactory.slice();
		let blacklist = $localstorage.get('axe-message-blacklist');
		blacklist = (blacklist) ? JSON.parse(blacklist) : new Array();
		if (blacklist.lenght > 0) {
			if (blacklist.lenght >= mfCopy.lenght) {
				blacklist = new Array();
			} else {
				mfCopy = mfCopy.filter(function (message) {
					return (blacklist.indexOf(message.id) == -1);
				})
			}
		}
    	$scope.picture = [
			'orientacoes_fundo.jpg',
			'smile_fundo.jpg',
			'dictionary_fundo.jpg'
		].sort(function randomize() {
			return (Math.round(Math.random())-0.5);
		}).pop();
		$scope.message = mfCopy.sort(function randomize() {
			return (Math.round(Math.random())-0.5);
		}).pop();
		MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
		blacklist.push($scope.message.id);
		$localstorage.set('axe-message-blacklist', JSON.stringify(blacklist));
	};
	setTimeout($scope.refreshPage, 1000);
	ionicMaterialMotion.ripple();
})

.controller('AboutCtrl', function AboutCtrl($rootScope, $scope, ionicMaterialMotion, AboutFactory) {
	$rootScope.themeColor = "balanced";
	$scope.about = AboutFactory;
	ionicMaterialMotion.ripple();
});
