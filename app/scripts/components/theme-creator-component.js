'use strict';

angular
  .module('themeCreatorComponentModule', [])
  .directive('themeCreatorComponent', function() {
    return {
      templateUrl: 'views/theme-creator-component.html',
      scope: {},
      bindToController: {
        fontSize: "@"
      },
      controllerAs: 'ctrl',
      controller: function() {
        var that = this;
        this.onEditChange = function (fontSize) {
          that.fontSize = fontSize;
        };
      },
    };
  });
