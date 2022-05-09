console.clear();
const prompt = require("prompt-sync")();
const colors = require('colors');

let novamente = []; ///Essa variavel e caso o usuario deseja jogar novamente. 
while (true) {  /// Usei o WHILE TRUE  para Rodar o jogo
  do {  /// Usei o DO WHILE para reiniciar caso o usuario quiser
    let nome = prompt(`Digite seu nome:  `); // aqui pede o nome do usuario
    console.log();
    console.log(` Olá ${nome.blue}!! Seja bem vindo ao Jogo de Ficção Interativa!!!`);
    console.log();
    console.log();
    console.log(` Você irá nos guiar em uma hitória de busca ao tesouro.
A cada escolha que você fizer, você poderá ganhar ou perder moedas e energia. É importante chegar ao 
baú do tesouro com muita energia e moedas. 

`);
    console.log();

    let vida = {   /// Usei o OBJETO para controlar a energia e recompensa do usuario e mostrar para o usuario
      energia: 100,  
      recompensa: 100,

      horas: 6,
      dia: 1,
      periodo: "Manhã",

      dinheiro: function () {  /// Usei a função para calcular e guardar as recompensas.
        this.recompensa++;
      },
      andar: function () { /// Usei a função para calcular e guardar as energias
        this.energia++;
      },

      inicio: function () { /// Essa função mostra a para o usuario sua energia, recompensa, dias, horas e periodo,
        console.log(`
        São ${this.horas} horas do dia ${this.dia}.
        Agora É ${this.periodo}.
        Você está com :
        Energia: ${this.energia} %
        Moedas: ${this.recompensa} R$.
        `  .green.bold);
      },

      Tempo: function (horas) { //// Essa função e para calcular o tempo e guardar. 
        this.horas += horas;
        if (this.horas >= 24) {
          this.horas -= 24;
          this.dia++;
        }

        if (this.horas >= 16) {
          this.periodo = "Noite";
        } else if (this.horas >= 12) {
          this.periodo = "Tarde";
        } else if (this.horas >= 6) {
          this.periodo = " Manhã ";
        }
      },
    };

    /////////////////////////// Primeiro dia ////////////////////////////////////////////////

     console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
    console.log();
     console.log("Estamos no primeiro dia".red.bold);
    console.log();
    console.log();
    vida.inicio();/// Aqui mostra o Status do usuario
    console.log();
    console.log(` ${nome.blue} Para encontrar o tesouro você tem que ser muito inteligente 
    não deve perder MOEDAS ou ENERGIA, pois você dependerá delas para abrir o baú. O seu Avô vai lhe 
    dar um mapa, mas primeiro você tem que responder um enigma. 
    O que pode ser quebrado, mas não segurado?
    (1) o espelho 
    (2) a confiança `);
    console.log();
    console.log();

    let escolha = +prompt("Escolha o que fazer:  digite 1 ou 2: "); /// Essa variavel o usuario escolhe a melhor resposta

    while (escolha != 1 && escolha != 2) {  /// Usei o while para aceitar somente o 1 ou 2.
      escolha = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha == 1) { /// Esse if entra caso o usuario Digite 1
      console.log(`Que pena!!! ${nome.blue} você errou, e a confiança. com isso você  perdeu moedas e energia mas esta com 
        o mapa, cuidado pois você tem que aprender a resolver os enigmas.`.red.bold);
      vida.Tempo(6);
      vida.recompensa -= 15; /// Essa função subtrai do usuario recompensa
      vida.energia -= 15; //// essa função subtrai energia
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
      console.clear();
    } else if (escolha == 2) {  /// Esse else if entra caso o usuario Digite 2
      console.log(
        ` Parabéns!!! Ótima escolha é a confiança. Você é muito bom em resolver enigmas.`
      );
      vida.Tempo(6);
      vida.recompensa += 10;   /// Essa função subtrai do usuario recompensa
      vida.energia += 10;  //// essa função soma energia
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
        
      console.clear();

    }

    vida.inicio(); /// mostra o status comprelto do usuario como, hora, dia, periodo, energia e recompensa. 

    console.log();
    console.log();
    console.log();

    //////////////////////// meio dia//////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    console.log(`Agora  ${nome.blue}  você já está com o mapa, e agora você deve escolher os mantimentos para resgatar o tesouro.
           escolha os mantimentos para a sua viagem.
           (1) bússula, comida, bebida, água, enxada, pá ?
           (2) celular, gps, relógio e  video game para os marinheiros? `);

    console.log();

    let escolha1 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha1 != 1 && escolha1 != 2) {
      escolha1 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha1 == 1) {
      console.log(`Parabéns !!! ${nome.blue} Você  está no caminho certo!!!`.green.bold);
      vida.Tempo(8);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha1 == 2) {
      console.log(` Que pena! você errou, esses itens não são utilizados  em uma caça ao tesouro `.red.bold);
      vida.Tempo(8);
      vida.recompensa -= 5;
      vida.energia -= 5;
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    ///////////////// ja e noite ////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    vida.inicio();
    console.log(` Agora  ${nome.blue} Já é noite você  tem que encontrar alguns piratas, pois deverá ter uma
         tripulação. Que sorte você encontrou  a sua tripulação!!! Mas os piratas querem que você responda 
         a um enigma, pois para abrir o baú você deverá treinar muito os enigmas. Um homem está preso
         em uma sala com apenas duas saídas possíveis, por meio de portas. Atrás de uma das portas,
         existe uma sala construída a partir de lentes de aumento, mas os raios solares podem fritar
         instantaneamente qualquer um que entrar ali. Atrás da outra porta, existe um dragão que cospe fogo.
         Qual porta você deseja sair?
         (1) a porta que tem os raios solares?
         (2) a que tem o Dragão? `);

    console.log();
    let escolha2 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha2 != 1 && escolha2 != 2) {
      escolha2 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha2 == 1) {
      console.log( `Parabéns!!! ${nome.blue} Você escolheu a porta certa, pois á noite não tem sol.`.green.bold);
      vida.Tempo(10);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha2 == 2) {
      console.log(` Você Fritou!!!! Você deveria esperar anoitecer, assim não tem raio solar.`.red.bold);
      vida.Tempo(10);
      vida.recompensa -= 5;
      vida.energia -= 5;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    console.log();
    console.log();
    //////////////////////////////// dia 2 ///////////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    vida.inicio();
    console.log();
    console.log("Estamos no segundo dia ".red.bold);
    console.log();
    console.log();

    console.log(`Bom dia ${nome.blue}!!! Como você já está com seus piratas, então é hora de partir.
      para navegar você deve içar ou baixar as velas?
    (1) içar
    (2) baixar `);
    console.log();
    console.log();

    let escolha3 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha3 != 1 && escolha3 != 2) {
      escolha3 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha3 == 1) {
      console.log(`Parabéns!!! ${nome.blue} Agora vamos partir.`.green.bold);
      vida.Tempo(6);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha3 == 2) {
      console.log(`que pena! Você errou, você deve içar as velas. `.red.bold);
      vida.Tempo(6);
      vida.recompensa -= 5;
      vida.energia -= 5;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    ///////////////////////////////////meio do dia  2 /////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    vida.inicio();
    console.log(`Está vindo  uma tempestade o que os piratas devem fazer?

    (1) baixar velas?
    (2) içar velas `);

    console.log();
    let escolha5 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha5 != 1 && escolha5 != 2) {
      escolha5 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha5 == 1) {
      console.log(`Parabéns!!! ${nome.blue}  Você está no caminho certo!!! `.green.bold);
      vida.Tempo(8);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha5 == 2) {
      console.log(` Que pena! você errou, pois o vento pode levar o navio. `.red.bold);
      vida.Tempo(8);
      vida.recompensa -= 5;
      vida.energia -= 5;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    console.log();
    console.log();

    ///////////////////// noite dia 2////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      

    vida.inicio();
    console.log(`Já é noite do segundo dia. Você vai dar uma festa para os piratas ou colocar eles para trabalhar?

    (1) dar festa
    (2) Trabalhar `);

    console.log();
    let escolha6 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha6 != 1 && escolha6 != 2) {
      escolha6 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha6 == 1) {
      console.log(`Parabéns!!! ${nome.blue}  Pois quando estando felizes eles terão  mais confiança em você !!! ` .green.bold);
      vida.Tempo(10);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha6 == 2) {
      console.log(` Você errou!!! Era ideal dar uma festa, pois os piratas gostam de festas. `.red.bold);
      vida.Tempo(10);
      vida.recompensa -= 5;
      vida.energia -= 5;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    console.log();
    console.log();

    ///////////////////////////////// 3 dia/////////////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      

    vida.inicio();
    console.log();
    console.log("Estamos no terceiro  dia ".red.bold);
    console.log();
    console.log();

    console.log(`Bom dia ${nome.blue}!!! Estamos avistando uma ilha. O que devemos fazer agora? 
     nadar até ela ou ir de bote?
     (1) bote 
     (2) nadar `);
    console.log();
    console.log();

    let escolha7 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha7 != 1 && escolha7 != 2) {
      escolha7 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha7 == 1) {
      console.log(`Parabéns!!! Vamos de bote então, assim você não gasta sua energia.`.green.bold);
      vida.Tempo(6);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha7 == 2) {
      console.log(`Que pena você errou!!! Vocês vão gastar muita energia`.red.bold);
      vida.Tempo(6);
      vida.recompensa -= 8;
      vida.energia -= 8;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    ///////////////////////////////////meio do dia  3 /////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    vida.inicio();
    console.log(`Agora que chegamos na ilha, vamos procurar a chave do baú. Para isso 
    devemos resolver mais um enigma, agora os enigmas ficarão mais difíceis. 
    Meu avô recebeu 20 bolas e vai dividir entre duas netas.  o resultado está em horas!!!
    Que horas são?
 
    (1) 13:50?
    (2) 10:02? `);

    console.log();
    let escolha8 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha8 != 1 && escolha8 != 2) {
      escolha8 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha8 == 1) {
      console.log(`Parabéns!!! Isso mesmo são 10 pras duas!!!! `.green.bold);
      vida.Tempo(8);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha8 == 2) {
      console.log(` Que pena você errou!!! A resposta correta e 10 pras duas`.red.bold);
      vida.Tempo(8);
      vida.recompensa -= 8;
      vida.energia -= 8;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();
    }
    console.log();
    console.log();

    ///////////////////// noite dia 3 ////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      

    vida.inicio();
    console.log(`Já é noite, amanhã temos que encontrar a chave do Baú,  para ganhar mais moedas responda mais um enigma.
     Não Sou ímpar
     Sou maior que 90
     Não sou maior que 100
     Se você me subtrair de 100, fica sem nada
     Que número sou eu?

    (1) 100?
    (2) 90?`);

    console.log();
    let escolha9 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha9 != 1 && escolha9 != 2) {
      escolha9 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha9 == 1) {
      console.log(`Parabéns!!! ${nome.blue} Pois você está indo muito bem!!! `.green.bold);
      vida.Tempo(10);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha9 == 2) {
      console.log(` Que pena você errou!!! Você respondendo assim não vai conseguir resolver o último enigma.
                    A resposta e 100, dessa forma você vai ficar 100 nada `.red.bold);
      vida.Tempo(10);
      vida.recompensa -= 8;
      vida.energia -= 8;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    console.log();
    console.log();

    //////////////////////////  4 dia   /////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      

    vida.inicio();
    console.log();
    console.log("Estamos no ultimo dia ".red.bold);
    console.log();
    console.log();

    console.log(`Bom dia ${nome.blue}!!! Estamos no quarto e último dia, hoje promete. Estamos bem próximo do
    baú. O que devemos usar para nos guiar até o baú?
    Bússula ou binoculo?
    (1) bússula.
    (2) binoculo. `);
    console.log();
    console.log();

    let escolha10 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha10 != 1 && escolha10 != 2) {
      escolha10 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha10 == 1) {
      console.log(`Ótima escolha, pois a bússula vai te guiar até o baú.`.green.bold);
      vida.Tempo(6);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha10 == 2) {
      console.log(`Pessima esolha, pois o binuculo te guiar até o baú. `.red.bold);
      vida.Tempo(6);
      vida.recompensa -= 15;
      vida.energia -= 15;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    ///////////////////////////////////meio do dia  4 /////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      
    vida.inicio();
    console.log(`Agora que chegamos ao local onde o baú está. O que devemos usar para cavar?
      Uma pá ou um remo?
    (1) Pá?
    (2) Remo? `.yellow.bold);

    console.log();
    let escolha11 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha11 != 1 && escolha11 != 2) {
      escolha11 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha11 == 1) {
      console.log(`Isso mesmo com a pá você vai conseguir cavar.`.green.bold);
      vida.Tempo(3);
      vida.recompensa += 10;
      vida.energia += 10;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    } else if (escolha11 == 2) {
      console.log(`Você tem que usar uma pá. `.red.bold);
      vida.Tempo(3);
      vida.recompensa -= 20;
      vida.energia -= 20;
      console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
       prompt("Tecle ENTER para continuar!!!".yellow.bold);
     
      console.clear();

    }
    console.log();
    console.log();

    /////////////////////abrir o baú ////////////////////////////
    console.log();
      console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`.blue.bold);
      console.log();
      

    vida.inicio();
    console.log(`Agora é a hora da verdade. Vamos ver se você realmente é um pirata,
    se você polpou energia e moedas você vai conseguir. Hum!!! O que é isso? Outro baú, mas tem um
    bilhete dentro. " Responda esse enigma para abrir o baú pois, a quantidade de letras da resposta
    é o segredo do cadeado que esta no segundo baú". Qual e elemento quimico está sempre na sombra?

    (1) galio?
    (2) índio?`.red.bold);

    console.log();
    let escolha12 = +prompt("Escolha o que fazer:  digite 1 ou 2: ");

    while (escolha12 != 1 && escolha12 != 2) {
      escolha12 = +prompt(` Digite a opção Valida!! digite 1 ou 2 : `);
    }
    if (escolha12 == 1) {
      vida.recompensa -= 50;
      vida.energia -= 50;

      while (vida.recompensa <= 0) {
        console.log(`${nome} Você perdeu!!!!!!!!!!
    ###########  GAME OVER ################`.red.bold);

        break;
        
      }

      while (vida.recompensa > 0) {
        console.log(` Parabéns Você conseguiu abrir o baú  mesmo errando o enigma. 
    A resposta seria o Indio, pois ele está sempre embaixo do gálio. Sua recompensa foi 10.000 moedas `.green.bold);
        vida.Tempo(10);
        vida.recompensa += 1000000;
        vida.energia += 100;
        console.log();
        console.log();

        break;
      }
    } else if (escolha12 == 2) {
      console.log(
        ` Parabéns!!! ${nome.green} Você conseguiu abrir o baú, você provou que é um excelente pirata. Navegou com sua tripulação e descobriu o enigma. Aproveite sua recompensa, são 10.000 moedas`.green.bold);
      vida.Tempo(10);
      vida.recompensa += 1000000;
      vida.energia += 100;
      console.log();
      console.log();
    }

    vida.inicio();
    novamente = prompt(` ${nome.green} você deseja jogar novamente? digite sim ou nao: `.cyan.bold);
    console.log();
    let resposta = "Opção invalida ";

    while (novamente !== "sim" && novamente !== "nao") {
      novamente = prompt(`${resposta} "digite sim ou nao:  " `);
    }
  } while (novamente == "sim");
  {
    console.log("Fim do jogo!!! Volte Sempre.".green.bold);
    break;
  }
}
