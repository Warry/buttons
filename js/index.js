var app = angular
  .module("app", ["ui.router"])
  .controller("AppController", [
    "$http",
    "$sce",
    "$stateParams",
    function($http, $sce, $stateParams) {
      var vm = this;

      var COLORS = [
        "red",
        "pink",
        "purple",
        "deeppurple",
        "indigo",
        "blue",
        "lightblue",
        "cyan",
        "teal",
        "green",
        "lightgreen",
        "lime",
        "yellow",
        "amber",
        "orange",
        "deeporange",
        "brown",
        "grey",
        "bluegrey",
        "black",
        "white"
      ],
        colors = COLORS;

      vm.currentAudio = "";
      vm.buttons = data;
      angular.forEach(vm.buttons, function(i) {
        if (i.src === $stateParams.src) {
          vm.buttonDetail = i;
          vm.buttonDetail.video =
            vm.buttonDetail.video &&
            $sce.trustAsResourceUrl(
              "//www.youtube.com/embed/" +
                vm.buttonDetail.video +
                (vm.buttonDetail.video.indexOf("?") === -1 ? "?" : "&amp;") +
                "&amp;controls=0&amp;theme=dark&amp;showinfo=0&amp;rel=0&amp;modestbranding=1"
            );
        }
        var rand = Math.floor(Math.random() * colors.length);
        i.class = (rand ? colors[rand] : "red") + "-button";
        var tmp = [];
        if (colors.length) {
          for (var j = 0; j < colors.length; j++) {
            if (j !== rand) {
              tmp.push(colors[j]);
            }
          }
          colors = tmp;
        } else {
          colors = COLORS;
        }
        i.source = $sce.trustAsResourceUrl("sounds/" + i.src + ".mp3");
      });

      vm.play = function(button) {
        var audio = document.getElementsByTagName("audio")[0];
        var audioSource = audio.src.replace(/.*?buttons\//g, '');
        var buttonSource = 'sounds/' + button.src + '.mp3';
        console.log(audio.src);
        console.log(buttonSource);
        if(audioSource === buttonSource) { // Click on the same button
          if(!audio.currentTime || audio.duration - audio.currentTime < audio.duration/20 || button.paused) { // Start of track/End of track, reset timer
            console.log('play');
            if(!button.paused) {
              audio.currentTime = 0.01;
            }
            audio.play();
            button.paused = false;
          }
          else { // Track is playing
            console.log('pause');
            audio.pause();
            button.paused = true;
          }
        }
        else { // Click on new button
          if (audio.currentTime && audio.currentTime <= audio.duration) { // Previous track is running
            audio.pause(); // Unload previous
          }
          // Hotswap audio sources
          audio.src = buttonSource;
          audio.preload = 'auto';
          audio.currentTime = 0.01;
          audio.play();
        }
      };
    }
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("buttons", {
        url: "/",
        templateUrl: "all.html",
        controller: "AppController as vm"
      })
      .state("item", {
        url: "/{src}",
        templateUrl: "button.html",
        controller: "AppController as vm"
      });
    $urlRouterProvider.otherwise("/");
  });

// DATA

var data = [
  {
    title: "0118 999 88199 9119 725...3",
    description: "Le fameux numéro <3",
    src: "01189998819991197253",
    video: "ab8GtuPdrUQ"
  },
  {
    title: "06h30",
    description: "Et tout va bien !",
    src: "6h30",
    video: "q0GUzoHvS8s"
  },
  {
    title: "1up",
    description: "You get an extra life !",
    src: "1up",
    video: "_lSfM7F-_2E"
  },
  {
    title: "20th Century Fox à la flute",
    description: "Ca donne envie de s'y remettre hein?",
    src: "20thcenturyfoxflute",
    video: "IsdCGQbbd8k"
  },
  {
    title: "</3",
    description: "GlaDoS :'(",
    src: "glados",
    video: "4CdoufQu1ko"
  },
  {
    title: "A moi?",
    src: "amoi",
    video: "pnj7O2YatBM"
  },
  {
    title: "A que coucou",
    description: "COUCOU !",
    src: "aquecoucou",
    video: "3bK3Ddbqs7E"
  },
  {
    title: "Akhmed",
    description: "I kill you",
    src: "ikillyou",
    video: "GBvfiCdk-jc"
  },
  {
    title: "Alleluia",
    description: "Sainte bombe TMTC <3",
    src: "hallelujah",
    video: "IUZEtVbJT5c"
  },
  {
    title: "Amazing horse",
    description: "Sweet lemonade !",
    src: "lookatmyhorse",
    video: "VecVykoHCuU"
  },
  {
    title: "Après",
    src: "apay"
  },
  {
    title: "Apwal",
    src: "apoil",
    video: "LT6GbI5_cww"
  },
  {
    title: "Arthour",
    description: "Couillère",
    src: "arthour",
    video: "J7x7FyYGj74"
  },
  {
    title: "Au revoir.",
    src: "aurevoir",
    video: "fNHMF-tW9vA"
  },
  {
    title: "Badger",
    description: "Mushroom mushroom !",
    src: "badger",
    video: "pzagBTcYsYQ"
  },
  {
    title: "Badumtss",
    description: "Pour toutes les vannes de merde",
    src: "badumtss",
    video: "yNizwPBaU6U"
  },
  {
    title: "Balls of steel",
    src: "ballsofsteel",
    video: "2rAjily7rME"
  },
  {
    title: "Banana phone",
    src: "bananaphone",
    video: "3vWm47yPLGc"
  },
  {
    title: "Bazinga",
    description: "Sheldon Cooper t'a eu !",
    src: "bazinga",
    video: "u85u2ymDl8M"
  },
  {
    title: "Benny Hill",
    src: "bennyhill",
    video: "hJC4HvpWewM"
  },
  {
    title: "Benzaie live",
    description: "Cette EXAGERATION !",
    src: "benzaielive",
    video: "L13ZlraWWQk"
  },
  {
    title: "Bird is the word",
    description: "Peter Griffin did it again",
    src: "birdistheword",
    video: "7OXVPgu6urw"
  },
  {
    title: "Bob l'éponge",
    description: "ou alors...",
    src: "spongebob",
    video: "vE2ETqUGj6Q"
  },
  {
    title: "Boblennon",
    description: "Notre dieu à tous",
    src: "boblennon",
    video: "P0unM_XNYPQ"
  },
  {
    title: "Bonne nuit les chiards",
    description: "Un petit coup de pipeau?",
    src: "bonnenuitleschiards",
    video: "9KbREoFax3U"
  },
  {
    title: "Boom headshot !",
    description: "Pour remplacer votre son de headshot sur CS",
    src: "boomheadshot",
    video: "olm7xC-gBMY"
  },
  {
    title: "Boule noire",
    description: "OHOHOHOH",
    src: "boulenoire",
    video: "y_sG_lPgMvk"
  },
  {
    title: "C'est pas faux",
    description: "Perceval rulz",
    src: "cestpasfaux",
    video: "JTsKShlfgBk"
  },
  {
    title: "C'est pas sorcier",
    description: "Une putain d'émission <3",
    src: "cestpassorcier",
    video: "eVxjTDvdaL0"
  },
  {
    title: "C'est qui le patron?",
    description:
      "Ne mets pas tes doigts sur la porte, tu risques de te faire pincer très fort",
    src: "lapindumetro",
    video: "XfSVs1xjb0Q"
  },
  {
    title: "Ca c'est une talalavoca",
    description: "Comprenez ce que vous pouvez",
    src: "zas",
    video: "2H1fFwiJG_0"
  },
  {
    title: "Ca dépasserait l'entendement",
    description: "Mais enfin Jérôme !",
    src: "cadepasselentendement",
    video: "C8SkmKGkh5o"
  },
  {
    title: "Café?",
    src: "cafe",
    video: "g209Ab0R7EA"
  },
  {
    title: "Can't touch this",
    src: "canttouchthis",
    video: "otCpCn0l4Wo"
  },
  {
    title: "Cantina",
    description: "By Watto, dans Star Wars Racer",
    src: "wattocantina",
    video: "JQkFriEZAeE"
  },
  {
    title: "Careless Whisper",
    description: "Envie de sensualité?",
    src: "carelesswhisper",
    video: "izGwDsrQ1eQ"
  },
  {
    title: "Chanson du poireau",
    description: "Ievan äiti se kammarissa virsiä veisata huijjuutti...",
    src: "loituma",
    video: "qmf9JkedPR8"
  },
  {
    title: "Chapi chapo",
    src: "chapichapo",
    video: "f_oEovxpf8s"
  },
  {
    title: "Chewbacca",
    description: "Vas-y Chewie, mets la gomme !",
    src: "chewbacca",
    video: "iotyF3DQrVA"
  },
  {
    title: "Codec",
    description: "Snake? Snake? SNAAAAKE !",
    src: "codec",
    video: "cdOzb3lhEe4"
  },
  {
    title: "Coin",
    description: "Parce que c'est cool les bruits de canard",
    src: "cuek",
    video: "8sxRUjBryLc"
  },
  {
    title: "Comsi",
    description: "...Jnexistépa",
    src: "comsi",
    video: "RvK19xgAxSU"
  },
  {
    title: "Coucou",
    description: "Tu veux voir ma bite?",
    src: "coucou",
    video: "iNr8-xpK0YQ"
  },
  {
    title: "Crickets",
    description: "Gros blanc après une vanne",
    src: "crickets",
    video: "Evj_h6GJ6xo"
  },
  {
    title: "DROOOOGUE",
    src: "drogue",
    video: "EGL-sz1atnI"
  },
  {
    title: "Die potato",
    description: "NOOOOOOO",
    src: "diepotato",
    video: "U9KlSOIWJQc"
  },
  {
    title: "Do a barrel roll",
    description: "Fox McCloud l'a bien compris",
    src: "doabarrelroll",
    video: "wIkJvY96i8w"
  },
  {
    title: "Do it",
    description: "JUST DO IT",
    src: "justdoit",
    video: "5-sfG8BV8wU"
  },
  {
    title: "Doh",
    description: "Oh Homer !",
    src: "doh",
    video: "cnaeIAEp2pU"
  },
  {
    title: "Don't drop that durka durk",
    src: "durkadurk",
    video: "BFGAvTNEvdw"
  },
  {
    title: "Dramatic chipmunk",
    description: "TINTINTIIIIIIIIIIN!",
    src: "dramatic",
    video: "a1Y73sPHKxw"
  },
  {
    title: "Dring dring dring",
    description: "Eh oui, ça vient de Pokémon :D",
    src: "dringdringdring",
    video: "tLygyWsgmnc"
  },
  {
    title: "EA Sports",
    description: "Itseneuguém",
    src: "easports",
    video: "3QP7KOsKtDo"
  },
  {
    title: "Epic sax guy",
    description: "A écouter en boucle, sans en doûter",
    src: "epicsaxguy",
    video: "qIIOza9ZaXw"
  },
  {
    title: "Et on fait tourner les serviettes",
    description: "Pour vos mariages",
    src: "tournerlesserviettes",
    video: "kk2CzGfL7n4"
  },
  {
    title: "Everyday I'm shufflin",
    src: "shufflin",
    video: "f1zBrtr_KxA"
  },
  {
    title: "Eye of the tiger",
    description: "Pour vos battles de ping-pong enragées",
    src: "eyeofthetiger",
    video: "btPJPFnesV4"
  },
  {
    title: "Finish him",
    description: "Fatality",
    src: "finishhim",
    video: "2YxPFw7lfY0"
  },
  {
    title: "Gaayyyyy",
    description: "Ken Jeong > le reste des acteurs de Community",
    src: "gaaaay",
    video: "KRUZK01LffE"
  },
  {
    title: "Gameboy",
    src: "gameboy",
    video: "BsJqIiSuBnA"
  },
  {
    title: "Goodbye",
    description: "Se faire cuire à 4000° #tbt",
    src: "goodbye",
    video: "ihYVZFl-Ck0"
  },
  {
    title: "Guile",
    description: "Meilleur perso de Street",
    src: "guiletheme",
    video: "Iof5pRAIZmw"
  },
  {
    title: "Gurdil",
    description: "On creuse le jour, on boit la nuit",
    src: "gurdil",
    video: "UWPdBI9FlTg"
  },
  {
    title: "Ha-ha",
    description: "Nelson se fout de toi",
    src: "haha",
    video: "rX7wtNOkuHo"
  },
  {
    title: "Hadouken",
    description: "Quart de cercle + poing",
    src: "hadouken",
    video: "pHJKS3r_YUg"
  },
  {
    title: "Hard Corner",
    description: "Benzaaaaaaie !",
    src: "hardcorner",
    video: "nrKChueoLEs"
  },
  {
    title: "Harlem shake",
    description: "Pour vos soirées entre potes avec des poneys",
    src: "harlemshake",
    video: "8f7wj_RcqYk"
  },
  {
    title: "Hello darkness my old friend",
    description: "Pour les moments de solitude",
    src: "hellodarknessmyoldfriend",
    video: "u9Dg-g7t2l4"
  },
  {
    title: "Hey",
    description: "Listen !",
    src: "hey",
    video: "wOFVrjL-XBM"
  },
  {
    title: "Hi-hi",
    description: "MJ représente",
    src: "mjhihi",
    video: "tAuqYBoHv6M"
  },
  {
    title: "Hobbits",
    description: "A Isengard :/",
    src: "hobbits",
    video: "uE-1RPDqJAY"
  },
  {
    title: "Hymne de baseball",
    description: "HOOOOME RUUUUN !",
    src: "mlb",
    video: "PFR3S6jN0Ng"
  },
  {
    title: "I don't hate you",
    description: "Les tourelles vous aiment <3",
    src: "portalturret",
    video: "OUxM3XqZJ9c"
  },
  {
    title: "I like to move it",
    description: "Oui, Madagascar quoi",
    src: "madagascar",
    video: "s6tgGXXj0bc"
  },
  {
    title: "I'm sexy and I know it",
    description: "Tout est dans le titre",
    src: "sexyandknowit",
    video: "wyx6JDQCslE"
  },
  {
    title: "Imma firin'",
    description: "In my lazor",
    src: "lazor",
    video: "fyuNidSrVik"
  },
  {
    title: "Inspecteur Gadget",
    description: "Et là qui voilà?",
    src: "inspecteurgadget",
    video: "i0mlC026Wwk"
  },
  {
    title: "It's OK to be gay",
    src: "itsoktobegay",
    video: "3j4t185wl-0"
  },
  {
    title: "It's a trap !",
    description: "Akhbar l'avait dit !",
    src: "itsatrap",
    video: "4F4qzPbcFiA"
  },
  {
    title: "It's me Mario",
    src: "itsmemario",
    video: "ZhadLMDWcGA"
  },
  {
    title: "It's over 9000 !",
    description: "Bah au moins !",
    src: "over9000",
    video: "SiMHTK15Pik"
  },
  {
    title: "J'ai fait caca",
    description: "Ah mais oui mais non c'est vrai !",
    src: "jaifaitcaca",
    video: "0wCWtHxapW0"
  },
  {
    title: "J'danse comme un ouf",
    description: "CL4P-TP :D",
    src: "jdonnetout",
    video: "szaMhLB24A8"
  },
  {
    title: "J'vous aime putain",
    src: "jvousaimeputain",
    video: "cxAGEsDglO8"
  },
  {
    title: "K2000",
    description: "David Hasselhoff FTW",
    src: "k2000",
    video: "iN3rvvkHo1M"
  },
  {
    title: "Kamehameha",
    src: "kamehameha",
    video: "dHvcBga2ino"
  },
  {
    title: "Keuuuuuwah",
    description: "Exclamation tirée de la série 'Le coeur a ses raisons'",
    src: "keuuuuuwah",
    video: "DpjCPV8x4Io"
  },
  {
    title: "Keyboard cat",
    src: "keyboardcat",
    video: "J---aiyznGQ"
  },
  {
    title: "Kill Bill",
    description: "Ou la pub de la poste x)",
    src: "killbill",
    video: "E84OWq6z3IQ"
  },
  {
    title: "Kill Bill parano",
    description: "Imaginez les gros zooms de caméra",
    src: "killbill2",
    video: "hg6rqDX-1wQ"
  },
  {
    title: "Koh Lanta",
    description: "Cette sanction est irrévocable",
    src: "kohlanta",
    video: "5VAuOq1WiYg"
  },
  {
    title: "LEEEROOOOY",
    description: "JENNNKINS !",
    src: "leeeeroy",
    video: "EpzADbkIyXw"
  },
  {
    title: "La jungle des animaux",
    src: "lajungledesanimaux",
    video: "Uz1F89nlZUU"
  },
  {
    title: "Lalalalalalalala",
    description: "Lalalalalalalala",
    src: "lalalala",
    video: "i2winnYY2Pc"
  },
  {
    title: "Lapin crétin",
    description: "BWAAAAAAAAAAAH !",
    src: "rabbids",
    video: "AtRYcMw9Mww"
  },
  {
    title: "Laughing owl",
    description: "Une chouette qui rigole de manière bizarre ^^",
    src: "laughingowl",
    video: "M5p9JO9JgvU"
  },
  {
    title: "Le papa pingouin",
    src: "papapingouin",
    video: "DN59pKJoF34"
  },
  {
    title: "Le petit bonhomme en mousse",
    description: "Pour vos soirées beaufs",
    src: "lepetitbonhommeenmousse",
    video: "CcoPdIpYuhc"
  },
  {
    title: "Let the bodies",
    description: "Hit the flooooooor !",
    src: "letthebodies",
    video: "BfR5O2PXzfc"
  },
  {
    title: "Let's get to RUMBLE !",
    description: "Ca va chier",
    src: "rumble",
    video: "sUU5rMgSj_I"
  },
  {
    title: "Looney toons",
    description: "Le générique de notre enfance",
    src: "looneytoons",
    video: "0jTHNBKjMBU"
  },
  {
    title: "MEU",
    description: "MEU",
    src: "meu",
    video: "gH1ro89KlhU"
  },
  {
    title: "MSN",
    description: "Nous on s'aime, et ons'le dit sur MSN",
    src: "msn",
    video: "vJL2-WSow4c"
  },
  {
    title: "Magabons",
    description: "Vous n'êtes que des magabons !",
    src: "magabon",
    video: "ozCsQLR07vo"
  },
  {
    title: "Magnum",
    description: "Tom Selleck. Point.",
    src: "magnum",
    video: "LBIgXhiOpeQ"
  },
  {
    title: "Mais non mais non",
    description: "TUTUDULUDU",
    src: "muppets",
    video: "8N_tupPBtWQ"
  },
  {
    title: "Mario - Pièce",
    src: "mariocoin",
    video: "iPILIf7ru48"
  },
  {
    title: "McGyver",
    description: "Que de bons souvenirs :)",
    src: "mcgyver",
    video: "lc8RFPZUkiQ"
  },
  {
    title: "Merci vous",
    src: "mercivous"
  },
  {
    title: "Merguez Party",
    description: "Tant qu'y a d'la braise, c'est pas fini !",
    src: "lamerguezparty",
    video: "UTzFjw4U8eU"
  },
  {
    title: "Metal Gear",
    src: "metalgear",
    video: "lERvkGVXAiY"
  },
  {
    title: "Michel c'est le Brésil",
    description: "Tout ça pour des Velux !",
    src: "michelcestlebresil",
    video: "h5Vw9jncERY"
  },
  {
    title: "Moskau",
    description: "Un peu de Russie dans vos veines",
    src: "moskau",
    video: "7pTwE-lqRgQ"
  },
  {
    title: "Murloc",
    description: "Osez le faire aussi bien",
    src: "murloc",
    video: "37EU7tGtJmM"
  },
  {
    title: "Même que des fois...",
    src: "memequedesfoismoijevomis",
    video: "wTlYEnqrLDM"
  },
  {
    title: "NO !",
    description: "GOD PLEASE NO",
    src: "no",
    video: "31g0YE61PLQ"
  },
  {
    title: "NOOTNOOT",
    description: "Big up à Corentin ;)",
    src: "nootnoot",
    video: "a4VvRWTD3Ok"
  },
  {
    title: "Narwhals",
    description: "Inventors of the chiche kebab !",
    src: "narwhals",
    video: "ykwqXuMPsoc"
  },
  {
    title: "Nein",
    description: "ou nine?",
    src: "neinnein",
    video: "sLs19nIikwQ"
  },
  {
    title: "Nokia 3310",
    description: "Avec 3 mois de batterie",
    src: "nokia3310",
    video: "-2uadMVEsjc"
  },
  {
    title: "Nom de Zeus",
    description: "C'est vous l'doc, doc",
    src: "nomdezeus",
    video: "DYH4Q2AQxs4"
  },
  {
    title: "Non",
    description: "Mario l'a dit",
    src: "non",
    video: "caXgpo5Ezo4"
  },
  {
    title: "Nyan Cat",
    src: "nyancat",
    video: "QH2-TGUlwu4"
  },
  {
    title: "On est champions",
    description: "On est tous ensemble !",
    src: "tousensemble",
    video: "ATNRq90niUU"
  },
  {
    title: "On s'en bat les...",
    src: "onsenbatlescouilles",
    video: "XoDY9vFAaG8"
  },
  {
    title: "Oppa gangnam style",
    description: "Le succès à 2.6 milliard de vues (normal)",
    src: "gangnamstyle",
    video: "kf2GUx6xsgQ"
  },
  {
    title: "Ouaip",
    description: "C'est pas un Racaillou ça m'dame !",
    src: "ouaisouais",
    video: "QYeWLYATwPc"
  },
  {
    title: "Pacman dies",
    src: "pacmandeath",
    video: "r1mB9874c5s"
  },
  {
    title: "Papi fougasse l'énigme",
    src: "papifougasse",
    video: "pLVtpMqTUSI"
  },
  {
    title: "Papi fougasse solution",
    src: "papifougasse2",
    video: "pLVtpMqTUSI"
  },
  {
    title: "Parler italien",
    description: "Peter Griffin qui sait parler italien",
    src: "badadipoopi",
    video: "J6dFEtb06nw"
  },
  {
    title: "Penny",
    src: "penny",
    video: "tKV4XYD3xK4"
  },
  {
    title: "Pikachu",
    description: "'chuuu :3",
    src: "pikachu",
    video: "gENjTs8VskQ"
  },
  {
    title: "PoPiPo",
    description: "Hatsune Miku a tout dit !",
    src: "popipo",
    video: "GkVcgbvNoK0"
  },
  {
    title: "Pokémon",
    description: "Ca demande du courage !",
    src: "pokemon",
    video: "lQOEhxTZbz8"
  },
  {
    title: "Pouin pouin pouin pouiiiin !",
    description: "Blague vaseuse spotted",
    src: "sadtrombone",
    video: "yJxCdh1Ps48"
  },
  {
    title: "Power Rangers",
    description: "Gogo Power Rangers",
    src: "powerrangers",
    video: "7Wt6XlVob_E"
  },
  {
    title: "Psychose",
    src: "psycho",
    video: "qMTrVgpDwPk"
  },
  {
    title: "Puddi puddi",
    description: "Giga puddi !",
    src: "puddipuddi",
    video: "KLJ-jXJLPcU"
  },
  {
    title: "Quoiiii?",
    src: "quoiiii",
    video: "aGSka-KgJpw"
  },
  {
    title: "Ramoucho",
    description: "Jeu de mots Ramoucho !",
    src: "jeudemotsramoucho",
    video: ""
  },
  {
    title: "Roggan?",
    description: "Dogen !",
    src: "roggan",
    video: "eHv9U9V1X74"
  },
  {
    title: "Roulement de tambour",
    description: "Attention, il va faire un bide",
    src: "drumroll",
    video: "h0bArnwuhc8"
  },
  {
    title: "SEGA",
    description: "...En fait peut-être pas",
    src: "sega2",
    video: "rh5eis0sMHI"
  },
  {
    title: "SHUT UP !",
    src: "shutup",
    video: "CEgh8TUlpQc"
  },
  {
    title: "Sabre laser",
    description: "Etre un Jedi, c'est cool",
    src: "lightsaber",
    video: "faQO57Iwlo0"
  },
  {
    title: "Scatman",
    src: "scatman",
    video: "Hy8kmNEo1i8"
  },
  {
    title: "Sega",
    description: "C'est plus fort que toi",
    src: "sega",
    video: "MTJ-jtUg4rE"
  },
  {
    title: "Shake that ass",
    description: "Bitch and let me see what you got",
    src: "shakethatass",
    video: "NkRyWpgmV3Y"
  },
  {
    title: "Sing hallelujah",
    src: "singhallelujah",
    video: "CWCycC0P5AM"
  },
  {
    title: "Snoop Dogg",
    description: "Alors qu'est-ce qu'on attend?",
    src: "cesoirsnoopdogg",
    video: "sjHngbA4-a8"
  },
  {
    title: "Soft kitty",
    description: "Purr, purr, purr",
    src: "softkitty",
    video: "x9DdiZBnpoQ"
  },
  {
    title: "Spanish flea",
    description: "Je ne connaissais pas le titre !",
    src: "spanishflea",
    video: "4F01zynHX70"
  },
  {
    title: "Suit up",
    description: "Barney Stinson = Awesome",
    src: "suitup",
    video: "CiweaZQ8g5U"
  },
  {
    title: "Super Timor",
    description: "Paraît que c'est encore plus fort avec sa nouvelle formule",
    src: "supertimor",
    video: "59xYAKjCnIo"
  },
  {
    title: "Superman",
    src: "superman",
    video: "e9vrfEoc8_g"
  },
  {
    title: "Surprise",
    src: "surprise",
    video: "dQw4w9WgXcQ"
  },
  {
    title: "TAAAANK",
    description: "Left 4 Dead inside !",
    src: "tank",
    video: "7UZjgBvyheg"
  },
  {
    title: "THX",
    description: "Chuut, le filme commence !",
    src: "thx",
    video: "fLWacgcUMKw"
  },
  {
    title: "Tada",
    description: "Window XP users remembers",
    src: "tada",
    video: "nYEVvGapF20"
  },
  {
    title: "Tetris",
    src: "tetris",
    video: "xfaLulhrxZc"
  },
  {
    title: "The Internet is for porn",
    src: "inetisforporn",
    video: "zBDCq6Q8k2E"
  },
  {
    title: "The final countdown",
    src: "thefinalcountdown",
    video: "9jK-NcRmVcw"
  },
  {
    title: "This is SPARTA",
    src: "thisissparta",
    video: "rvYZRskNV3w"
  },
  {
    title: "Tin-tin-tin-tiiin",
    description: "Exclamation tirée du sublime film 'La cité de la peur'",
    src: "lacitedelapeur",
    video: "Dr7gOfOqc3Y"
  },
  {
    title: "Trololo",
    description: "RIP in peace",
    src: "trolololol",
    video: "oavMtUWDBTM"
  },
  {
    title: "Trop géniaaaale",
    description: "La peluuuche !",
    src: "tropgeniale",
    video: "Bq2YkdVoBoo"
  },
  {
    title: "Troy and Abed in the morning",
    description: "De la série 'Community' (que je vous recommande)",
    src: "troyandabed",
    video: "-nGBVea8Atw"
  },
  {
    title: "Tumbleweed",
    description: "Pour les gros vents",
    src: "tumbleweed",
    video: "iIIuR-HjFho"
  },
  {
    title: "Tunak tunak",
    src: "tunaktunak",
    video: "vTIIMJ9tUc8"
  },
  {
    title: "Victory",
    description: "Final Fantasy VII ;)",
    src: "victoryff",
    video: "QEmbOL3AAEs"
  },
  {
    title: "Viens boire un p'tit coup",
    description: "...à la maison",
    src: "viensboireunptitcoup",
    video: "XZAt-_gwvXY"
  },
  {
    title: "Vous êtes vraiment dégeulasse",
    description: "Mais ça m'plaît !",
    src: "degeulasse",
    video: "VowxelNhFNw"
  },
  {
    title: "WAZZAAAAA",
    description: "WEUZAAAAAAA",
    src: "wazzup",
    video: "MnCJatlzdHA"
  },
  {
    title: "WHAT THE F*CK",
    src: "wtfboom",
    video: "idm3J7I0qyQ"
  },
  {
    title: "Wall-E",
    description: "Eveuuuh",
    src: "walle",
    video: "QHH3iSeDBLo"
  },
  {
    title: "We are the champions",
    description: "Pour fêter ses succès !",
    src: "wearethechampions",
    video: "04854XqcfCY"
  },
  {
    title: "What The Cut Résumé",
    description: "Antoine Daniel <3",
    src: "whatthecut",
    video: "-B_yBNXTV3w"
  },
  {
    title: "What is love?",
    description: "Baby don't hurt me",
    src: "whatislove",
    video: "HEXWRTEbj1I"
  },
  {
    title: "What iz ze fuque?",
    description: "De 'Norman fait des vidéos'",
    src: "whatisthefuque",
    video: "tUS_YP3L_mE"
  },
  {
    title: "What what",
    description: "In the butt",
    src: "whatwhat",
    video: "u1kS4vOq2Y0"
  },
  {
    title: "Wheatley",
    description: "Avec cet accent british !",
    src: "wheatley",
    video: "afHt_1sVQ14"
  },
  {
    title: "Wheeeeeee",
    src: "whee",
    video: "o-6HA41F6Lg"
  },
  {
    title: "Who let the dogs out?",
    description: "Who who who who who",
    src: "wholetthedogsout",
    video: "Qkuu0Lwb5EM"
  },
  {
    title: "Who's your daddy?",
    src: "whosyourdaddy",
    video: "oRRPTzhfquQ"
  },
  {
    title: "Wilhelm",
    description: "Une cascade ratée? Pas de soucis !",
    src: "wilhelm",
    video: "Zf8aBFTVNEU"
  },
  {
    title: "Windows 95",
    description: "Souvenirs...",
    src: "windows95",
    video: "miZHa7ZC6Z0"
  },
  {
    title: "Wingardium leviosaaa",
    src: "leviosa",
    video: "reop2bXiNgk"
  },
  {
    title: "Wololo",
    description: "Et hop, changé de camp",
    src: "wololo",
    video: "tSZRAlSLQsk"
  },
  {
    title: "YEAAAAAAH !",
    description: "Les Experts",
    src: "yeahhh",
    video: "vS3dsT0QxWs"
  },
  {
    title: "Yabbadabadoo",
    src: "yabbadabbadoo",
    video: "HnZoED4jPok"
  },
  {
    title: "Yamete kudasai",
    src: "yametekudasai",
    video: "LB-oTkbapYw"
  },
  {
    title: "Yeah",
    description: "Yea !",
    src: "yeah",
    video: "rFTRmjimtCc"
  },
  {
    title: "You are a pirate",
    description: "Ahoy !",
    src: "youareapirate",
    video: "i8ju_10NkGY"
  },
  {
    title: "You shall not pass !",
    src: "youshallnotpass",
    video: "mJZZNHekEQw"
  },
  {
    title: "You touch my tralala",
    description: "Hum my ding ding dong",
    src: "youtouchmytralala",
    video: "iPrnduGtgmc"
  },
  {
    title: "Zelda - Un item",
    description: "Trouvé :D",
    src: "zeldaitem",
    video: "69AyYUJUBTg"
  },
  {
    title: "Zelda - Un passage secret",
    description: "Ouaaaah",
    src: "zeldasecret",
    video: "69AyYUJUBTg"
  },
  {
    title: "Ouais ouais ouais ouais",
    description: "Ouaaaah",
    src: "ouaisouaisouaisouais",
    video: "Re9eNv6T2UA"
  },
  {
    title: "Julien Lepers",
    src: "lalalalalala",
    video: "Re9eNv6T2UA"
  },
  {
    title: "Ah oui oui oui oui oui",
    src: "ahouiouiouiouioui",
    video: "Re9eNv6T2UA"
  },
  {
    title: "Je m'envole...",
    src: "jemenvole",
    video: "ZuoB1oz3eE8"
  },
  {
    title: "Modem",
    description: "Souvenirs...",
    src: "modem",
    video: "gsNaR6FRuO0"
  },
  {
    title: "JOHN CENA",
    src: "johncena",
    video: "TUQ3nVoN-ko"
  },
  {
    title: "C'est ma meuf",
    src: "cestmameuf",
    video: "wZroqa4tePs"
  },
  {
    title: "Dragon Ball Z",
    src: "dragonballz",
    video: "gQRFEeWeuRA"
  },
  {
    title: "La marmelade de ma grand-mère",
    description: "Une chanson poignante !",
    src: "lamarmelade",
    video: "X1GF69uN60M"
  },
  {
    title: "On a tous le droit",
    src: "onatousledroit",
    video: "LSfmY7TDhJA"
  },
  {
    title: "J'ai envie d'me suicider",
    description: "Ouais c'est trop cool",
    src: "jaienviedmesuicider",
    video: "NdZznTwgFEg"
  },
  {
    title: "T.E.X.T.O",
    description: "<3",
    src: "texto",
    video: "Wxio7XI2ZSU"
  },
  {
    title: "Move bitch",
    description: "Get out the way !",
    src: "movebitchgetouttheway",
    video: "VDWMYTP1kUA"
  },
  {
    title: "Motus",
    description: "Mot mot motus !",
    src: "motus",
    video: "JVdT9xC50lA"
  },
  {
    title: "Des chiffres et des lettres",
    src: "deschiffresetdeslettres",
    video: "Hx0jFIOaGRI"
  },
  {
    title: "Tnetennba",
    description: "Good morning, that's a nice TNETENNBA !",
    src: "tnetennba",
    video: "lsFAokXCxTI"
  },
  {
    title: "Fort Boyard",
    src: "fortboyard",
    video: "I39TFXIENqs"
  },
  {
    title: "Fort Boyard, mais lamasticot",
    src: "fortboyardlamasticot",
    video: "glxIR90pUrY"
  },
  {
    title: "Il ne peut plus rien nous arriver...",
    description: "d'affreux maintenant !",
    src: "ilnepeutplusriennousarriver",
    video: "MEKHaG9FxKY"
  },
  {
    title: "Bonjour !",
    src: "bonjour",
    video: "Vm7gj9vqBjY"
  },
  {
    title: "Genre des phrases choc",
    src: "genredesphraseschocs",
    video: "eisNsAPNq4A"
  },
  {
    title: "Moi je vote il bluffe",
    src: "moijevoteilbuffe",
    video: "TkepAXvRa-4"
  },
  {
    title: "Boîte à meuh",
    description: "MEUUUUUH !",
    src: "meuh",
    video: "UHdmqsnc_8g"
  },
  {
    title: "La colagiala",
    description: "Un gout de café !",
    src: "lacolegiala",
    video: "Bg3pFjbCag0"
  },
  {
    title: "Enfer et damnation !",
    src: "enferetdamnation",
    video: "Dd5k8Vicbzc"
  },
  {
    title: "Who's that Pokemon?",
    description: "IT'S PIKACHU !",
    src: "whosthatpokemon",
    video: "IfQumd_o0Gk"
  },
  {
    title: "Mais c'est d'la meeeerde !",
    description: "JP Coffe RIP in peace",
    src: "maiscestdlamerde",
    video: "ay_Hf5lJm1k"
  },
  {
    title: "Salut Youtube !",
    description: "CONNARD !",
    src: "salutyoutube",
    video: "w241Kh86nPQ"
  },
  {
    title: "PEGI 18",
    src: "pegi18",
    video: "YnaVvmhnCeQ"
  },
  {
    title: "CLAP CLAP CLAP CLAP",
    description: "Friends <3",
    src: "clapcalapclapclap",
    video: "Xs-HbHCcK58"
  },
  {
    title: "Yesss ! Yesss !",
    src: "yesyes",
    video: "jPmb0F00YPE"
  },
  {
    title: "HEYHEYHEY",
    description: "What's going on?",
    src: "heyheyhey",
    video: "ZZ5LpwO-An4"
  },
  {
    title: "Brain power",
    description:
      "O-oooooooooo AAAAE-A-A-I-A-U-JO-oooooooooooo AAE-O-A-A-U-U-A-E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAAA﻿",
    src: "brainpower",
    video: "mj-v6zCnEaw"
  },
  {
    title: "Souffrir Ok?",
    description: "JE SUIS PAS VENUE ICI POUR SOUFFRIR, OK ?﻿",
    src: "souffrirok",
    video: "QglFGVDcuX8"
  },
  {
    title: "C'est génial",
    description: "Merci Link﻿",
    src: "cestgenial",
    video: "EBcTVQezd8o"
  },
  {
    title: "Qu'est-ce qu'on peut s'ennuyer",
    description: "Merci Link﻿",
    src: "ennuyerici",
    video: "EBcTVQezd8o"
  },
  {
    title: "Et flash ! Me voilà",
    description: "Merci Link﻿",
    src: "etflashmevoila",
    video: "EBcTVQezd8o"
  },
  {
    title: "Un petit baiser?",
    description: "Merci Link﻿",
    src: "etunpetitbaiser",
    video: "EBcTVQezd8o"
  },
  {
    title: "Il est écrit",
    description: "GANON﻿",
    src: "ilestecrit",
    video: "EBcTVQezd8o"
  },
  {
    title: "Mon petit",
    description: "C'est génial !﻿",
    src: "monpetit",
    video: "EBcTVQezd8o"
  },
  {
    title: "Squalala !",
    description: "Nous sommes partis !﻿",
    src: "squalala",
    video: "EBcTVQezd8o"
  },
  {
    title: "Notre projet",
    description: "Macron qui gueule, la base quoi﻿",
    src: "notreprojet",
    video: "rfuwy1jiJEQ"
  },
  {
    title: "Applaudissements",
    description: "Clap clap﻿",
    src: "applause"
  },
  {
    title: "Flim",
    description: "Ce flim n'est pas un flim sur le cyclimse﻿",
    src: "ceflim",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Connasse",
    src: "connasse",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Des chips !",
    src: "deschips",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Fasciste de merde",
    src: "fascistedemerde",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Georges",
    description: "enfin, politiquement﻿",
    src: "georgespolitiquement",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Il en est mort",
    description: "Quel con﻿",
    src: "ilenestmort",
    video: "U7wR3_VQGUs"
  },
  {
    title: "iPhone",
    description: "Pour faire des blagues à vos collègues﻿",
    src: "iphone"
  },
  {
    title: "I play Pokemon Go",
    description: "E-VE-RY-DAY﻿",
    src: "iplaypokemongo",
    video: "vfc42Pb5RA8"
  },
  {
    title: "Is this real life",
    src: "isthisreallife",
    video: "txqiwrbYGrs"
  },
  {
    title: "A la ferme",
    src: "laferme",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Me faire foutre?",
    description: "Ok, j'y vais﻿",
    src: "mefairefoutre",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Pas de problème !",
    description: "Tu peux rester !﻿",
    src: "pasdeprobleme",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Pitoyable",
    src: "pitoyable",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Samsung",
    src: "samsung"
  },
  {
    title: "Everyday I'm...",
    src: "steppinonthebeach",
    video: "RcuzIJHJ7t8"
  },
  {
    title: "Monsieur n'est pas une tapette",
    description: "Monsieur est commissaire de police﻿",
    src: "tapettegeante",
    video: "ClWmF0eRvMM"
  },
  {
    title: "Par dessus la 3ème corde !",
    src: "troisiemecorde",
    video: "dKagEGavjZM"
  },
  {
    title: "Fouet",
    description: "Comme Indy !﻿",
    src: "whip"
  },
  {
    title: "Yaaaaaaay !",
    src: "yaaaaaaay"
  },
  {
    title: "Yep.",
    src: "yep",
    video: "U7wR3_VQGUs"
  },
  {
    title: "Mais t'es pas net",
    description: "Mais si, chui très net!",
    src: "maistespasnet",
    video: "bNTxvAnRC54"
  },
  {
    title: "Yeeeeees",
    description: "De Little Britain <3",
    src: "yeeeeees",
    video: "5rax50efCUk"
  },
  {
    title: "Super Green",
    src: "supergreen",
    video: "V4X2H9k2FCw"
  },
  {
    title: "Telepod 2000",
    src: "telepod2000",
    video: "GIVMqIoJWwc"
  },
  {
    title: "Je vous emmerde...",
    description: "Et je rentre à ma maison !",
    src: "emmerdemaison",
    video: "VzYMN7b7Tlc"
  },
  {
    title: "Saupiquet",
    description: "Le bon couscous qui nous plaît !",
    src: "saupiquet",
    video: "5UnM_hkcO0g"
  },
  {
    title: "DaRude - Sandstorm",
    src: "darude",
    video: "y6120QOlsfU"
  },
  {
    title: "Charal",
    src: "charal",
    video: "LzASfDaCYc8"
  },
  {
    title: "Juste Leblanc",
    src: "justeleblanc",
    video: "UYYwaFy05-U"
  },
  {
    title: "N'est-ce pas !",
    src: "nestcepas",
    video: "9Q4wvz5Uul8"
  },
  {
    title: "J'men bats les couilles",
    src: "jmenbatslescouilles",
    video: "tHGVH1AKe1Q"
  },
  {
    title: "Toujours debout",
    src: "toujoursdebout",
    video: "uv37yxc51bE"
  },
  {
    title: "Uncle F*cker",
    src: "unclefucker",
    video: "2iivGv58svY"
  },
  {
    title: "Et quand il pète...",
    src: "etquandilpeteiltrouesonslip",
    video: "jw5d_W-JPP4"
  },
  {
    title: "Oh Long Johnson",
    src: "ohlongjohnson",
    video: "kkwiQmGWK4c"
  },
  {
    title: "Cri",
    src: "cri"
  },
  {
    title: "Screaming goat",
    src: "screaminggoat",
    video: "SIaFtAKnqBU"
  },
  {
    title: "Too Many Cooks",
    src: "toomanycooks",
    video: "QrGrOK8oZG8"
  },
  {
    title: "7th Element",
    src: "7thelement",
    video: "DaCz_X_H0GI"
  },
  {
    title: "Ah !",
    src: "ah",
    video: "s5-nUCSXKac"
  },
  {
    title: "La mer noire",
    src: "lamernoire",
    video: "0SdcfsD_WVE"
  },
  {
    title: "Tequila Heineken",
    src: "tequilaheineken",
    video: "G1bkrbOFZxQ"
  }
];
