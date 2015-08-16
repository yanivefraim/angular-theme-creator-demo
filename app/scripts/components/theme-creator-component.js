'use strict';

angular
  .module('themeCreatorComponentModule', [])
  .directive('themeCreatorComponent', function() {
    return {
      templateUrl: 'views/theme-creator-component.html'
    };
  });
