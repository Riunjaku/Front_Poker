var texasholdemapp = angular.module('texasholdemapp', ['ui.router']);

texasholdemapp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'View/partial-home.html'
        })

        // nested list with custom controller
        .state('home.poker', {
            url: '/poker',
            templateUrl: 'View/partial-poker.html',
            controller: function ($scope, $http) {

                $scope.cartasJogador = "";
                $scope.cartasComputador = "";
                $scope.ganhador = "Aguardando partida";
                $scope.TextoMaoC = "";
                $scope.TextoMaoJ = "";
                
                $scope.jogo = jogo;

               

                function jogo() {
                    $http.get("http://localhost:55038/teste/Jogo")
                        .then(function (response) {
                            $scope.cartasJogador = response.data.maoJogadorView;
                            $scope.cartasComputador = response.data.maoComputadorView;
                            $scope.TextoMaoC = "Mão do Computador";
                            $scope.TextoMaoJ = "Mão do Jogador";
                            $scope.ganhador = response.data.ganhador;

                            console.log(response);


                        });
                };
            }
        })





});

