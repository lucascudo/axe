angular.module('starter.controllers', [ 'ngCordova' ])

.controller('HomeCtrl', function HomeCtrl($rootScope) {
	$rootScope.themeColor = "positive";
})

.controller('DictionaryCtrl', function DictionaryCtrl($rootScope, $scope, ionicMaterialMotion, ionicMaterialInk, DictionaryFactory) {
	ionicMaterialInk.displayEffect();
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
	ionicMaterialInk.displayEffect();
})

.controller('MessageCtrl', function MessageCtrl($rootScope, $scope, $state, localStorage, $cordovaSocialSharing, ionicMaterialMotion, ionicMaterialInk, MessageFactory, MediaSrv) {
	ionicMaterialInk.displayEffect();
	$rootScope.themeColor = "energized";
	$scope.share = function () {
		$cordovaSocialSharing.share('"' + $scope.message.description + '"');
	};
	$scope.refreshPage = function () {
		function onMediaError(err) { console.log(err); }
		function onMediaSuccess(media) { $scope.message.media = media; }
		function onMediaStop() {
			document.getElementById("btn-pause").classList.add("hide");
			document.getElementById("btn-play").classList.remove("hide");
		}

		let mfCopy = MessageFactory.slice();
		let blacklist = localStorage.get('axe-message-blacklist');
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
		localStorage.set('axe-message-blacklist', JSON.stringify(blacklist));
	};
	setTimeout($scope.refreshPage, 1000);
	ionicMaterialMotion.ripple();
	ionicMaterialInk.displayEffect();
})

.controller('AboutCtrl', function AboutCtrl($rootScope, $scope, ionicMaterialMotion, ionicMaterialInk, AboutFactory) {
	ionicMaterialInk.displayEffect();
	$rootScope.themeColor = "balanced";
	$scope.about = AboutFactory;
	ionicMaterialMotion.ripple();
	ionicMaterialInk.displayEffect();
});
