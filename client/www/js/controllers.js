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
	$scope.refreshPage = function refreshPage() {
		function onMediaError(err) { console.log(err); }
		function onMediaSuccess(media) { $scope.message.media = media; }
		function onMediaStop() {
			document.getElementById("btn-pause").classList.add("hide");
			document.getElementById("btn-play").classList.remove("hide");
		}
		$scope.message = MessageFactory.sort(function randomize() {
			return (Math.round(Math.random())-0.5);
		}).pop();
		MediaSrv.loadMedia('audio/mae/' + $scope.message.filename, null, null, onMediaStop).then(onMediaSuccess, onMediaError);
	};
	$scope.refreshPage();
	$rootScope.themeColor = "energized";
})

.controller('AboutCtrl', function AboutCtrl($rootScope, $scope) {
	$rootScope.themeColor = "balanced";
	$scope.authors = [
		{ name: "Mãe Stella de Oxóssi (Maria Stella de Azevedo Santos)", role: "Produção de conteúdo" },
		{ name: "Graziela Domini", role: "Produção de conteúdo" },
		{ name: "Cascudo (Lucas Teixeira Rocha)", role: "Desenvolvimento de software" },
		{ name: "Antônio Ladeia", role: "Desenvolvimento de software" },
		{ name: "Rose Vermelho", role: "Design gráfico" }
	];
	$scope.greetings = [
		"Nelson Pretto",
		"Kah Menezes",
		"--> INSERIR NOME DO RAPAZ QUE AJUDOU ROSE COM GRAVAÇÃO E TRANSMISSÃO DOS AUDIOS AQUI <--"
	];
});
