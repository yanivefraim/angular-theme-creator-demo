'use strict';

/**
 * @ngdoc overview
 * @name themeCreatorDemoApp
 * @description
 * # themeCreatorDemoApp
 *
 * Main module of the application.
 */
angular
  .module('themeCreatorDemoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
