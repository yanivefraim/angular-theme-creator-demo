'use strict';

/**
 * @ngdoc function
 * @name themeCreatorDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the themeCreatorDemoApp
 */
angular.module('themeCreatorDemoApp')
  .controller('MainCtrl', function () {
    this.fontSize = 16;
    this.fonts = ['Helvetica','Ariel', 'fantasy','cursive'];
  });
