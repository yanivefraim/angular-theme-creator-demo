'use strict';

angular
  .module('themeCreatorComponentModule', [])
  .directive('themeCreatorComponent', function() {
    return {
      templateUrl: 'views/theme-creator-component.html',
      scope: {},
      bindToController: {
        fontSize: "@",
        fontColor: "@"
      },
      controllerAs: 'ctrl',
      controller: function() {
        var that = this;
        this.onFontSizeChange = function (fontSize) {
          that.fontSize = fontSize;
        };

        this.onFontColorChange = function (fontColor) {
          that.fontColor = fontColor;
        };
      },
    };
  });
