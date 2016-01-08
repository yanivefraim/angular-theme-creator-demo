'use strict';

/**
 * @ngdoc service
 * @name themeCreatorDemoApp.dataService
 * @description
 * # dataService
 * Service in the themeCreatorDemoApp.
 */
angular.module('themeCreatorDemoApp')
  .service('dataService', function () {

    var service = {};

    service.getFontFamilyTypes = function() {
      return ['Helvetica','Ariel', 'fantasy','cursive'];
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
