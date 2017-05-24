angular.module("starter.factories", [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.factory("AboutFactory", function () {
  return {
    version: '31',
    authors: [
      { name: "Maria Stella de Azevedo Santos", role: "Produção de conteúdo", picture: "foto-mae.jpg" },
      { name: "Lucas Teixeira Rocha", role: "Desenvolvimento de software", picture: "foto-lucas.png" },
      { name: "Antônio Ladeia", role: "Desenvolvimento de software", picture: "foto-ladeia.jpg" },
      { name: "Rose Vermelho", role: "Design gráfico", picture: "foto-rose.jpg" }
    ],
    greetings: [
      "Karina Menezes",
      "Marcus Quintela",
      "Mestre Dendê",
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
  return messages = [
    { id: 1, filename: 'a confianca e o adubo.mp3', description: 'A confiança é o adubo do amor.' },
    { id: 2, filename: 'a humanidade ja percebeu.mp3', description: 'A humanidade já percebeu a necessidade de purificar o corpo, precisa aprender a purificar a mente e o coração.' },
    { id: 3, filename: 'a ilusao e como bolha de sabao.mp3', description: 'A ilusão é como bolha de sabão que se desfaz facilmente.' },
    { id: 4, filename: 'a maior felicidade de toda mae.mp3', description: 'A maior felicidade de toda mãe é saber que o fruto do seu ventre é feliz e está transmitindo essa felicidade para a humanidade.' },
    { id: 5, filename: 'a maior surpresa da vida.mp3', description: 'A maior surpresa da vida é tomar consciência que o mal existe.' },
    { id: 6, filename: 'a nova tendencia e ter.mp3', description: 'A nova tendência é termos olhos magros.' },
    { id: 7, filename: 'a paz e irma da verdade.mp3', description: 'A paz é irmã da verdade e da justiça.' },
    { id: 8, filename: 'a sapiencia so pode ser encontrada.mp3', description: 'A sapiência só pode ser encontrada nas experiências.' },
    { id: 9, filename: 'a sobrevivencia e a maior de todas.mp3', description: 'A sobrevivência é a maior de todas as vitórias.' },
    { id: 10, filename: 'a unica certeza que a idade nos tras.mp3', description: 'A única certeza que a idade nos traz é que não existem certezas.' },
    { id: 11, filename: 'amigo e aquele que compreende o que o outro quer fazer.mp3', description: 'Amigo é aquele que compreende o que o outro quer fazer, mas não necessariamente apoia.' },
    { id: 12, filename: 'cabe a cada um saber.mp3', description: 'Cabe a cada um saber o quanto dói a sua dor.' },
    { id: 13, filename: 'competir e lutar sem intencao.mp3', description: 'Competir é lutar sem intenção de destruir o outro.' },
    { id: 14, filename: 'competir e mostrar seu potencial e saber aplaudir.mp3', description: 'Competir é mostrar seu potencial e saber aplaudir o potencial do outro.' },
    { id: 15, filename: 'cotagem sem generosidade gera.mp3', description: 'Coragem sem generosidade gera crueldade.' },
    { id: 16, filename: 'criticamos a sociedade mas esquecemos.mp3', description: 'Criticamos a sociedade, mas esquecemos de que fazemos parte dela.' },
    { id: 17, filename: 'cuidado uma mentira puxa .mp3', description: 'Cuidado! Uma mentira puxa outra.' },
    { id: 18, filename: 'devemos correr atras dos sonhos.mp3', description: 'Devemos correr atrás de sonhos e nunca de ilusões.' },
    { id: 19, filename: 'dizem que e na tristeza que encontramos um grande amigo.mp3', description: 'Todos dizem que é na tristeza que se encontra um grande amigo... Será?' },
    { id: 20, filename: 'e a falta de fraternidade que causa a pobresa.mp3', description: 'É a falta de fraternidade que produz a pobreza no mundo.' },
    { id: 21, filename: 'e bom cuidar para que um dialogo proposto.mp3', description: 'É bom cuidar para que um diálogo proposto não se transforme em um monólogo imposto.' },
    { id: 22, filename: 'em nada adianta a indignacao.mp3', description: 'Em nada adianta a indignação sem ação.' },
    { id: 23, filename: 'em um podio.mp3', description: 'Em um pódio só cabem três pessoas e a maioria recebe o prêmio de aplaudir os vencedores.' },
    { id: 24, filename: 'encontrar o amor verdadeiro.mp3', description: 'Encontrar o amor verdadeiro é a maior de todas as riquezas.' },
    { id: 25, filename: 'livre e quem respeita.mp3', description: 'Livre é quem respeita seus próprios limites e os dos seus irmãos.' },
    { id: 26, filename: 'nao e bom chorar muito.mp3', description: 'Não é bom chorar muito, não é bom sorrir muito, tudo em excesso traz perda de energia.' },
    { id: 27, filename: 'nao e preciso culpar ninguem para que um erro.mp3', description: 'Não é preciso culpar ninguém para que o erro seja consertado.' },
    { id: 28, filename: 'nas encruzilhadas da vida.mp3', description: 'Nas encruzilhadas da vida busque seu centro e encontre a saída.' },
    { id: 29, filename: 'ninguem deve afirmar.mp3', description: 'Ninguém deve afirmar nada para o outro, pois cada um tem a sua verdade.' },
    { id: 30, filename: 'ninguem e tao sabio que nao tenha a necessidade.mp3', description: 'Ninguém é tão sábio que não tenha necessidade de ser um eterno aprendiz.' },
    { id: 31, filename: 'no vinho e na velhice.mp3', description: 'No vinho e na velhice, a verdade.' },
    { id: 32, filename: 'nos devemos querer ser vencedores.mp3', description: 'Nós devemos querer ser vencedores, mas não devemos querer ser sempre vencedores.' },
    { id: 33, filename: 'nao esperem que um bufalo.mp3', description: 'Não peçam ao búfalo que voe como uma borboleta e nem espere que a borboleta tenha a força de um búfalo.' },
    { id: 34, filename: 'o amor precisa ser vivido no tempo presente.mp3', description: 'O amor precisa ser vivido no tempo presente, com a presença e presentes.' },
    { id: 35, filename: 'o bom politico.mp3', description: 'O bom político escuta todas as verdades para transformá-las em uma verdade que sirva para o bem comum.' },
    { id: 36, filename: 'o destino tacado e o caminho.mp3', description: 'O destino traçado é o caminho abençoado.' },
    { id: 37, filename: 'o homem so e senhor de si mesmo.mp3', description: 'O homem só é senhor de si mesmo quando tem controle sobre sua língua.' },
    { id: 38, filename: 'o medo e a arma invisivel.mp3', description: 'O medo é a arma invisível dos fortes.' },
    { id: 39, filename: 'o perdao e um sacrificio necessario.mp3', description: 'O perdão é um sacrifício necessário para quem quer atingir o sagrado.' },
    { id: 40, filename: 'o valor do dinheiro e aquele.mp3', description: 'O valor do dinheiro é aquele que cada um dá para ele.' },
    { id: 41, filename: 'para a maioria das pessoas a vida nao e um rio.mp3', description: 'Para a maioria das pessoas a vida não é um rio, é um cabo de guerra.' },
    { id: 42, filename: 'para quem esta conectado com sua parcela divina.mp3', description: 'Para quem está conectado com sua parcela divina a vida flui como um rio.' },
    { id: 43, filename: 'porque ao inves de pedir amor.mp3', description: 'Por que ao invés de pedir amor você não doa aquele que você tem?' },
    { id: 44, filename: 'quando fechamos os olhos para o mundo.mp3', description: 'Quando fechamos os olhos para o mundo, enxergamos o verdadeiro mundo.' },
    { id: 45, filename: 'que a chuva que cai do orum fertilize.mp3', description: 'Que a chuva que cai do céu fertilize nossos pensamentos.' },
    { id: 46, filename: 'que o substantivo amigo venha acompanhado.mp3', description: 'Que o substantivo amigo venha seguido do adjetivo sincero.' },
    { id: 47, filename: 'rejeitar a dor e rejeitar a vida.mp3', description: 'Rejeitar a dor é rejeitar a vida em toda sua plenitude.' },
    { id: 48, filename: 'sao imortais.mp3', description: 'São imortais todos aqueles que fazem com que sua trajetória na vida seja inesquecível.' },
    { id: 49, filename: 'se e dificil ser um amigo sincero.mp3', description: 'Se é difícil encontrar um amigo sincero, muito mais difícil é ser um deles.' },
    { id: 50, filename: 'se somos muito invejados e porque.mp3', description: 'Se somos muito invejados é por que somos muito invejosos.' },
    { id: 51, filename: 'se todas as lagrimas.mp3', description: 'Se todas as lágrimas choradas por amor se transformassem em nuvens de chuva, não existiria deserto na  terra.' },
    { id: 52, filename: 'se voce quer que a humanidade evolua.mp3', description: 'Se você quer que a humanidade evolua, continue trabalhando para sua própria evolução.' },
    { id: 53, filename: 'seja um eterno aprendiz sabedoria.mp3', description: 'Seja um eterno aprendiz. Sabedoria é a única coisa que se leva para eternidade.' },
    { id: 54, filename: 'seu destino esta escrito na linha dos seus sonhos.mp3', description: 'Seu destino está escrito nas linhas dos seus sonhos.' },
    { id: 55, filename: 'so e brincadeira aquilo.mp3', description: 'Só é brincadeira, aquilo que faz todo mundo ri.' },
    { id: 56, filename: 'sobreviver e a maior vitoria na guerra.mp3', description: 'Sobreviver é a maior vitória na guerra do viver.' },
    { id: 57, filename: 'tenha piedade dos outros mas evite.mp3', description: 'Tenha piedade dos outros, mas evite ter piedade de si mesmo.' },
    { id: 58, filename: 'todo mundo procura o amor mas so encontra.mp3', description: 'Todo mundo procura o amor, mas só o encontra quem o merece.' },
    { id: 59, filename: 'todos falam em mudanca melhor seria.mp3', description: 'Todos falam em mudança, melhor seria que falassem em ampliação.' },
    { id: 60, filename: 'todos nos podemos ser imortais cotanto.mp3', description: 'Todos nós podemos ser imortais, contanto que cumpramos com competência e alegria a função que nos foi destinada.' },
    { id: 61, filename: 'voce esta dando um tempo para o amor.mp3', description: 'Você está dando um tempo para o amor, ou está dando um tempo no amor?' },
    { id: 62, filename: 'xire e o verbo brincar.mp3', description: 'Xirê é o verbo brincar na língua yorubá. Brincar é enfeitiçar, é encantar.' },
    
    // Segunda remessa
    { id: 63, filename: 'AUD-20170524-WA0000.m4a', description: 'Quem valoriza o que é seu não precisa estar de olho no alheio.' },
    { id: 64, filename: 'AUD-20170524-WA0001.m4a', description: 'Quem queima etapas não faz o caminho completo.' },
    { id: 65, filename: 'AUD-20170524-WA0002.m4a', description: 'Fingir que não conhece os próprios defeitos não faz com que desapareçam.' },
    { id: 66, filename: 'AUD-20170524-WA0003.m4a', description: 'Quem está vinculado ao sagrado não pode mentir em seu nome.' },
    { id: 67, filename: 'AUD-20170524-WA0004.m4a', description: 'Segredo dividido deixa de ser segredo.' },
    { id: 68, filename: 'AUD-20170524-WA0005.m4a', description: 'Às vezes é preciso perder pouco para não perder tudo.' },
    { id: 69, filename: 'AUD-20170524-WA0006.m4a', description: 'Se não ficar atento ao que lhe é valoroso, poderá arrepender-se.' },
    { id: 70, filename: 'AUD-20170524-WA0007.m4a', description: 'Escolha! Na aceitação de um orientador espiritual todo cuidado é pouco.' },
    { id: 71, filename: 'AUD-20170524-WA0008.m4a', description: 'Pouca bebida alegra a alma, muita bebida entorpece a mente.' },
    { id: 72, filename: 'AUD-20170524-WA0009.m4a', description: 'As maledicências não tem força o suficiente para impedir uma firme caminhada.' },
    { id: 73, filename: 'AUD-20170524-WA0010.m4a', description: 'Nem tudo que é forte é aspero.' },
    { id: 74, filename: 'AUD-20170524-WA0011.m4a', description: 'Quem é prevenido e atento, cai menos em armadilhas.' },
    { id: 75, filename: 'AUD-20170524-WA0012.m4a', description: 'O raiar de cada dia deve ser momento de grande alegria.' },
    { id: 76, filename: 'AUD-20170524-WA0013.m4a', description: 'A nuvem negra que encobre a vida hoje, dará lugar ao brilho do sol amanhã.' },
    { id: 77, filename: 'AUD-20170524-WA0014.m4a', description: 'As lágrimas lavam a alma e clareiam a mente.' },
    { id: 78, filename: 'AUD-20170524-WA0015.m4a', description: 'O cauteloso não deixa de errar, mas erra muito menos.' },
    { id: 79, filename: 'AUD-20170524-WA0016.m4a', description: 'O excesso gera desequilíbrio.' },
    { id: 80, filename: 'AUD-20170524-WA0017.m4a', description: 'Plante, regue, espere e colha!' },
    { id: 81, filename: 'AUD-20170524-WA0018.m4a', description: 'Quem bate esquece logo, quem apanha lembra sempre.' },
    { id: 82, filename: 'AUD-20170524-WA0019.m4a', description: 'Quem muito anda conhece muitos lugares, mas não chega a lugar nenhum.' },
    { id: 83, filename: 'AUD-20170524-WA0020.m4a', description: 'Quem desdenha dos defeitos alheios está exibindo os seus.' },
    { id: 84, filename: 'AUD-20170524-WA0021.m4a', description: 'Teimosia e rebeldia não geram alegria.' },
    { id: 85, filename: 'AUD-20170524-WA0022.m4a', description: 'Um fraco forte derruba um forte fraco.' },
    { id: 86, filename: 'AUD-20170524-WA0023.m4a', description: 'O mal agradecido é atroz.' },
    { id: 87, filename: 'AUD-20170524-WA0024.m4a', description: 'O que o destino disser que é, não há quem tenha força pra dizer que não é.' },
    { id: 88, filename: 'AUD-20170524-WA0025.m4a', description: 'Não podemos antecipar os acontecimentos, então por que nos preocuparmos com estes?' },
    { id: 89, filename: 'AUD-20170524-WA0026.m4a', description: 'Muito cuidado com o que entra pela boca e mais ainda com o que sai!' },
    { id: 90, filename: 'AUD-20170524-WA0027.m4a', description: 'Cuidado com o que fala para a vítima não ser você!' }
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
