angular.module("starter.factories", [])

.factory("DictionaryFactory", function () {
  return [
		{
      yoruba: "Orí",
      portuguese: "Cabeça",
      description: [
        "A palavra orí é usada para expressar tudo que é alto e destacado. O que demonstra a importância da cabeça para o povo yorubá.",
        "Ó lóríkukun = Ele é cabeçudo (literalmente, a cabeça dele é teimosa)."
      ]
    },
    {
      yoruba: "Çnu",
      portuguese: "Boca",
      description: [
        "A palavra çnu é usada para expressar abertura.",
        "Çnu ya mi = Fiquei surpreso (literalmente, fiquei de boca aberta).",
        "Çnu rê dùn = Ele é muito persuasivo (literalmente, a boca dele é doce)."
      ]
    },
    {
      yoruba: "Ojú",
      portuguese: "Olhos, rosto",
      description: [
        "A palavra ojú é usada para expressar o lugar onde as coisas acontecem, a parte principal de algum lugar: Ojúbô = Local principal de culto (ìbô).",
        "Ojú rê bájé = Ele está carrancudo (literalmente, o rosto dele se estragou).",
        "Ó fà ojú mi mö ra = Ela me deu boa impressão (literalmente, ela atraiu meus olhos ao dela)."
      ]
    }
	];
})

.factory('ḾessageFactory', function () {
  return [
    {
      text: 'Livre é aquele que...',
      author: 'Mãe Stella',
      filename: 'AUD-20151227-WA0005.mp3'
    },
    {
      text: 'Já possuímos mensagens personalizadas 2 =)',
      author: 'ROCHA, Lucas T.',
      filename: 'AUD-20151227-WA0009.mp3'
    },
    {
      text: 'Já possuímos mensagens personalizadas 3 =)',
      author: 'ROCHA, Lucas T.',
      filename: 'AUD-20151227-WA0010.mp3'
    }
  ].sort(function () {
    return (Math.round(Math.random())-0.5);
  }).pop();
})

.factory('MediaSrv', function($q, $ionicPlatform, $window){
  var service = {
    loadMedia: loadMedia,
    getStatusMessage: getStatusMessage,
    getErrorMessage: getErrorMessage
  };

  function loadMedia(src, onError, onStatus, onStop){
    var defer = $q.defer();
    $ionicPlatform.ready(function(){
      var mediaSuccess = function(){
        if(onStop){onStop();}
      };
      var mediaError = function(err){
        _logError(src, err);
        if(onError){onError(err);}
      };
      var mediaStatus = function(status){
        if(onStatus){onStatus(status);}
      };

      if($ionicPlatform.is('android')){src = '/android_asset/www/' + src;}
      defer.resolve(new $window.Media(src, mediaSuccess, mediaError, mediaStatus));
    });
    return defer.promise;
  }

  function _logError(src, err){
    console.error('media error', {
      code: err.code,
      message: getErrorMessage(err.code)
    });
  }

  function getStatusMessage(status){
    if(status === 0){return 'Media.MEDIA_NONE';}
    else if(status === 1){return 'Media.MEDIA_STARTING';}
    else if(status === 2){return 'Media.MEDIA_RUNNING';}
    else if(status === 3){return 'Media.MEDIA_PAUSED';}
    else if(status === 4){return 'Media.MEDIA_STOPPED';}
    else {return 'Unknown status <'+status+'>';}
  }

  function getErrorMessage(code){
    if(code === 1){return 'MediaError.MEDIA_ERR_ABORTED';}
    else if(code === 2){return 'MediaError.MEDIA_ERR_NETWORK';}
    else if(code === 3){return 'MediaError.MEDIA_ERR_DECODE';}
    else if(code === 4){return 'MediaError.MEDIA_ERR_NONE_SUPPORTED';}
    else {return 'Unknown code <'+code+'>';}
  }

  return service;
});