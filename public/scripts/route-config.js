
(function() {
  'use strict';



  angular.module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'home',
        controllerAs: 'vm',
        templateUrl: 'templates/home.html'
      })
      .when('/add',{
      	controller: 'add',
      	templateUrl : 'templates/add.html'
      })
      .when('/list', {
        controller: 'list',
        controllerAs: 'vm',
        templateUrl: 'templates/list.html'
      })
      .when('/form/:id',{
      	controller : 'form',
      	templateUrl : 'templates/form.html'
      })
      .when('/add1', {
        controller: 'RecipeDetailController',
        controllerAs: 'vm',
        templateUrl: 'templates/recipe-detail.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }


})();
