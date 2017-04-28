angular.module("starter.factories", [])

.factory("AboutFactory", function () {
  return {
    authors: [
      { name: "Maria Stella de Azevedo Santos", role: "Produção de conteúdo", picture: "foto-mae.jpg" },
      { name: "Lucas Teixeira Rocha", role: "Desenvolvimento de software", picture: "foto-lucas.png" },
      { name: "Antônio Ladeia", role: "Desenvolvimento de software", picture: "foto-ladeia.jpg" },
      { name: "Rose Vermelho", role: "Design gráfico", picture: "foto-rose.jpg" }
    ],
    greetings: [
      "Graziela Domini",
      "Karina Menezes",
      "Marcus Quintela",
      "Nelson Pretto",
      "Renata Rocha"
    ]
  };
})

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

.factory('MessageFactory', function () {
  return [
    { filename: 'a confianca e o adubo.mp3', description: 'A confiança é o adubo do amor.' },
    { filename: 'a humanidade ja parcebeu.mp3', description: 'A humanidade já percebeu a necessidade de purificar o corpo, precisa aprender a purificar a mente e o coração.' },
    { filename: 'a ilusao e como bolha de sabao.mp3', description: 'A ilusão é como bolha de sabão que se desfaz facilmente.' },
    { filename: 'a maior felicidade de toda mae.mp3', description: 'A maior felicidade de toda mãe é saber que o fruto do seu ventre é feliz e está transmitindo essa felicidade para a humanidade.' },
    { filename: 'a maior surpresa da vida.mp3', description: 'A maior surpresa da vida é tomar conciência que o mal existe.' },
    { filename: 'a nova tendencia e ter.mp3', description: 'A nova tendência é termos olhos magros.' },
    { filename: 'a paz e irma da verdade.mp3', description: 'A paz é irmã da verdade e da justiça.' },
    { filename: 'a sapiencia so pode ser encontrada.mp3', description: 'A sapiência só pode ser encontrada nas experiências.' },
    { filename: 'a sobrevivencia e a maior de todas.mp3', description: 'A sobrevivência é a maior de todas as vitórias.' },
    { filename: 'a unica certeza que a idade nos tras.mp3', description: 'A única certeza que a idade nos traz é que não existem certezas.' },
    { filename: 'amigo e aquele que compreende o que o outro quer fazer.mp3', description: 'Amigo é aquele que compreende o que o outro quer fazer, mas não necessariamente apoia.' },
    { filename: 'cabe a cada um saber.mp3', description: 'Cabe a cada um saber o quanto dói a sua dor.' },
    { filename: 'competir e lutar sem intencao.mp3', description: 'Competir é lutar sem intenção de destruir o outro.' },
    { filename: 'competir e mostrar seu potencial e saber aplaudir.mp3', description: 'Competir é mostrar seu potencial e saber aplaudir o potencial do outro.' },
    { filename: 'cotagem sem generosidade gera.mp3', description: 'Coragem sem generosidade gera crueldade.' },
    { filename: 'criticamos a sociedade mas esquecemos.mp3', description: 'Criticamos a sociedade, mas esquecemos de que fazemos parte dela.' },
    { filename: 'cuidado uma mentira puxa .mp3', description: 'Cuidado! Uma mentira puxa outra.' },
    { filename: 'devemos correr atras dos sonhos.mp3', description: 'Devemos correr atrás de sonhos e nunca de ilusões.' },
    { filename: 'dizem que e na tristeza que encontramos um grande amigo.mp3', description: 'Todos dizem que é na tristeza que se encontra um grande amigo... Será?' },
    { filename: 'e a falta de fraternidade que causa a pobresa.mp3', description: 'É a falta de fraternidade que produz a pobreza no mundo.' },
    { filename: 'e bom cuidar para que um dialogo proposto.mp3', description: 'É bom cuidar para que um diálogo proposto não se transforme em um monólogo imposto.' },
    { filename: 'em nada adianta a indignacao.mp3', description: 'Em nada adianta a indignação sem ação.' },
    { filename: 'em um podio.mp3', description: 'Em um pódio só cabem três pessoas e a maioria recebem o prêmio de aplaudir os vencedores.' },
    { filename: 'encontrar o amor verdadeiro.mp3', description: 'Encontrar o amor verdadeiro é a maior de todas as riquezas.' },
    { filename: 'livre e quem respeita.mp3', description: 'Livre é quem respeita seus próprios limites e os dos seus irmãos.' },
    { filename: 'nao e bom chorar muito.mp3', description: 'Não é bom chorar muito, não é bom sorrir muito, tudo em excesso traz perda de energia.' },
    { filename: 'nao e preciso culpar ninguem para que um erro.mp3', description: 'Não é preciso culpar ninguém para que o erro seja consertado.' },
    { filename: 'nas encruzilhadas da vida.mp3', description: 'Nas encruzilhadas da vida busque seu centro e encontre a saída.' },
    { filename: 'ninguem deve afirmar.mp3', description: 'Ninguém deve afirmar nada para o outro, pois cada um tem a sua verdade.' },
    { filename: 'ninguem e tao sabio que nao tenha a necessidade.mp3', description: 'Ninguém é tão sábio que não tenha necessidade de ser um eterno aprendiz.' },
    { filename: 'no vinho e na velhice.mp3', description: 'No vinho e na velhice, a verdade.' },
    { filename: 'nos devemos querer ser vencedores.mp3', description: 'Nós devemos querer ser vencedores, mas não devemos querer ser sempre vencedores.' },
    { filename: 'nao esperem que um bufalo.mp3', description: 'Não peçam ao búfalo que voe como uma borboleta e nem espere que a borboleta tenha a força de um búfalo.' },
    { filename: 'o amor precisa ser vivido no tempo presente.mp3', description: 'O amor precisa ser vivido no tempo presente, com a presença e presentes.' },
    { filename: 'o bom politico.mp3', description: 'O bom politico escuta todas as verdades para transformá-las em uma verdade que sirva para o bem comum.' },
    { filename: 'o destino tacado e o caminho.mp3', description: 'O destino traçado é o caminho abençoado.' },
    { filename: 'o homem so e senhor de si mesmo.mp3', description: 'O homem só é senhor de si mesmo quando tem controle sobre sua língua.' },
    { filename: 'o medo e a arma invisivel.mp3', description: 'O medo é a arma invisível dos fortes.' },
    { filename: 'o perdao e um sacrificio necessario.mp3', description: 'O perdão é um sacrifício necessário para quem quer atingir o sagrado.' },
    { filename: 'o valor do dinheiro e aquele.mp3', description: 'O valor do dinheiro é aquele que cada um dá para ele.' },
    { filename: 'para a maioria das pessoas a vida nao e um rio.mp3', description: 'Para a maioria das pessoas a vida não é um rio, é um cabo de guerra.' },
    { filename: 'para quem esta conectado com sua parcela divina.mp3', description: 'Para quem está conectado com sua parcela divina a vida flui como um rio.' },
    { filename: 'porque ao inves de pedir amor.mp3', description: 'Por que ao invés de pedir amor você não doa aquele que você tem.' },
    { filename: 'quando fechamos os olhos para o mundo.mp3', description: 'Quando fechamos os olhos para o mundo, enxergamos o verdadeiro mundo.' },
    { filename: 'que a chuva que cai do orum fertilize.mp3', description: 'Que a chuva que cai do céu fertilize nossos pensamentos.' },
    { filename: 'que o substantivo amigo venha acompanhado.mp3', description: 'Que o substantivo amigo venha seguido do adjetivo sincero.' },
    { filename: 'rejeitar a dor e rejeitar a vida.mp3', description: 'Rejeitar a dor é rejeitar a vida em toda sua plenitude.' },
    { filename: 'sao imortais.mp3', description: 'São imortais todos aqueles que fazem com que sua trajetória na vida seja inesquecível.' },
    { filename: 'se e dificil ser um amigo sincero.mp3', description: 'Se é difícil encontrar um amigo sincero, muito mais difícil é ser um deles.' },
    { filename: 'se somos muito invejados e porque.mp3', description: 'Se somos muito invejados é por que somos muito invejosos.' },
    { filename: 'se todas as lagrimas.mp3', description: 'Se todas as lágrimas choradas por amor se transformassem em nuvens de chuva, não exitiria deserto na  terra.' },
    { filename: 'se voce quer que a humanidade evolua.mp3', description: 'Se você quer que a humanidade evolua, continue trabalhando para sua própria evolução.' },
    { filename: 'seja um eterno aprendiz sabedoria.mp3', description: 'Seja um eterno aprendiz. Sabedoria é a única coisa que se leva para eternidade.' },
    { filename: 'seu destino esta escrito na linha dos seus sonhos.mp3', description: 'Seu destino está escrito nas linhas dos seus sonhos.' },
    { filename: 'so e brincadeira aquilo.mp3', description: 'Só é brincadeira, aquilo que faz todo mundo ri.' },
    { filename: 'sobreviver e a maior vitoria na guerra.mp3', description: 'Sobreviver é a maior vitória na guerra do viver.' },
    { filename: 'tenha piedade dos outros mas evite.mp3', description: 'Tenha piedade dos outros, mas evite ter piedade de si mesmo.' },
    { filename: 'todo mundo procura o amor mas so encontra.mp3', description: 'Todo mundo procura o amor, mas só o encontra quem o merece.' },
    { filename: 'todos falam em mudanca melhor seria.mp3', description: 'Todos falam em mudança, melhor seria que falassem em ampliação.' },
    { filename: 'todos nos podemos ser imortais cotanto.mp3', description: 'Todos nós podemos ser imortais, contanto que cumpramos com competência e alegria a função que nos foi destinada.' },
    { filename: 'voce esta dando um tempo para o amor.mp3', description: 'Você está dando um tempo para o amor, ou está dando um tempo no amor?' },
    { filename: 'xire e o verbo brincar.mp3', description: 'Xirê é o verbo brincar na língua yorubá. Brincar é enfeitiçar, é encantar.' }
  ];
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
