angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    templateUrl: './views/home.html',
    url: '/'
  })
  .state('results', {
    templateUrl: './views/results.html',
    url: '/results'
  });
  $urlRouterProvider.otherwise('/');
});
