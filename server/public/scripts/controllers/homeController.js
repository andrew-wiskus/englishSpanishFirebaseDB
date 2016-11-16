myApp.controller("HomeController", ["$scope", "$http", "$document", "$timeout", "$location", 'AuthFactory', 'UserFactory',
    function($scope, $http, $document, $timeout, $location, AuthFactory, UserFactory) {
      $scope.showAdjetives = false;
      $scope.showNouns = false;
      $scope.showVerbs = false;
      $scope.currentWordList = [];
      $scope.showEnglish = true;
      $scope.showEspanol = false;
      $scope.currentView = '';

      $scope.favoriteWord = function(){
        var wordID = $scope.user.wordList[$scope.currentView].length
        var dbRef = firebase.database()
        .ref()
        .child('userdb')
        .child($scope.user.uid)
        .child('favorites')
        .child($scope.currentView)
        .push(wordID)
      }
      $scope.addWord = function(num){
        $scope.showEnglish = true;
        $scope.showEspanol = false;
        var wordID = $scope.user.wordList[$scope.currentView].length
        var obj = {key: wordID, val: num};
        console.log(obj);

        var dbRef = firebase.database()
        .ref()
        .child('userdb')
        .child($scope.user.uid)
        .child('wordList')
        .child($scope.currentView)
        .push(obj);
      }

      function findNextWordToShow(view){
        switch(view){
          case 'nounList':
          $scope.currentWordList = $scope.langDB.nouns.list
          break;
          case 'verbList':
          $scope.currentWordList = $scope.langDB.verbs.list
          break;
          case 'adjList':
          $scope.currentWordList = $scope.langDB.adjetives.list

          break;
        }
      }
        $scope.show = function(view){
          $scope.showAdjetives = false;
          $scope.showNouns = false;
          $scope.showVerbs = false;

          switch(view){
            case 'nounList':
            $scope.showNouns = true;
            $scope.currentView = 'nouns'
            break;
            case 'verbList':
            $scope.showVerbs = true;
            $scope.currentView = 'verbs'
            break;
            case 'adjList':
            $scope.showAdjetives = true;
            $scope.currentView = 'adjetives'

            break;
          }

          findNextWordToShow(view);
        }

        $scope.langDB = {
            verbs: {},
            nouns: {},
            adjetives: {}
        };

        var initDB = firebase.database()
            .ref()

        initDB.once('value', x => {
            var tempDB = makeSnapshotObject(x.val()) //NOTE: restructure firebase db.. :P
                console.log('db:', x.val());
            $timeout(function() {
                console.log(tempDB[3]);
                $scope.langDB.verbs.list = x.val().verbs.inf
                $scope.langDB.verbs.conj = x.val().verbs.conj
                $scope.langDB.nouns.list = x.val().nouns
                $scope.langDB.adjetives.list = x.val().adj
                console.log('Language DB', $scope.langDB);
            }, 0)

        });



        $scope.user;
        $scope.firebaseUser;
        //auth variables
        var userFactory = UserFactory;
        var signIn = userFactory.signIn();
        var signOut = userFactory.signOut();
        $scope.auth = AuthFactory
        //clickfunctions
        $scope.login = function() {
            signIn();
        }
        $scope.logOff = function(){
            signOut();
        }




        //MARK:------FIREBASE BRAIN
        //listens to changes for database refrences. ie: task added to db.ref(user.uid) -> fires function to update scope.
        //ps. this is always running and listening for changes, even user == null.
        $scope.auth.$onAuthStateChanged(function(user) {
            $scope.firebaseUser = user;
            if (user != null) {
                if($scope.user === undefined){
                  $scope.user = {};
                }
                $scope.user.uid = user.uid;
                $scope.user.email = user.email;


                var userDB = firebase.database()
                .ref()
                .child('userdb')
                .child($scope.user.uid)
                .child('wordList')
                .on('value', x=>{
                  $timeout(function(){
                    $scope.user.wordList = {
                      verbs: [],
                      adjetives: [],
                      nouns: []
                    };

                    if(x.val().verbs != null){
                      $scope.user.wordList.verbs = makeSnapshotObject(x.val().verbs);
                      }
                    if(x.val().nouns != null){
                      $scope.user.wordList.nouns = makeSnapshotObject(x.val().nouns)

                      }
                    if(x.val().adjetives != null){
                      $scope.user.wordList.adjetives = makeSnapshotObject(x.val().adjetives)
                    }
                  },0)

                })


            }


        });



        //UTILITY FUNCTIONS
        function makeSnapshotObject(data) {
            var tempArray = [];
            _.pairs(data) //uses underscorejs to format object and update $scope.user.taskList
                .forEach(function(dataArray) {
                    dataArray[1].key = dataArray[0];
                    tempArray.push(
                        dataArray[1]
                    )
                })

            return tempArray;
        }

    }
]);









//TODO:

// if(data.length != 10 && (data[1] == "Imperativo Negativo" || data[1] == "Imperativo Afirmativo")){
//   //
//   // console.warn("Imperativo Afirmativo || Imperativo Negativo");
//   //
// }
//
// //NOTE: FRINGE CASES: //pushing forward without them
// //doler
// //llover
// //nevar
// //occurir



//KEY EVENT LISTENER !!! :D
// $document.bind("keydown", function(event) {
//     console.log(event);
//     if (event.key == "Tab") {

//         event.preventDefault(); //would prevent from tabbing all over the screen
//     }
// });
