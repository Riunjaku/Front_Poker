var texasholdemapp = angular.module('texasholdemapp', ['ui.router']);

texasholdemapp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.poker', {
            url: '/poker',
            templateUrl: 'partial-poker.html',
            controller: function ($scope, $http) {

                $scope.cartasJogador = "";
                $scope.cartasComputador = "";
                $scope.ganhador = "";
                
                $scope.jogo = jogo;

               

                function jogo() {
                    $http.get("http://localhost:55038/teste/Jogo")
                        .then(function (response) {
                            $scope.cartasJogador = response.data.maoJogadorView;
                            $scope.cartasComputador = response.data.maoComputadorView;
                            $scope.ganhador = response.data.ganhador;

                            console.log(response);


                        });
                };
            }
        })





});

