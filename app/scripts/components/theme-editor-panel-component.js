'use strict';

angular
  .module('themeEditorPanelComponentModule', ['themeCreatorFontSizeComponentModule', 'themeCreatorFontColorComponentModule'])
  .directive('themeEditorPanelComponent', function() {
    return {
      templateUrl: 'views/theme-editor-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: '@',
        fontFamily: '@',
        fontColor: '@',
        onFontColorChange: '&',
        onFontSizeChange: '&'

      },
      controller: function() {
        var that = this;
        this.onFontSizeChangeEvent = function (fontSize) {
          that.onFontSizeChange({fontSize: fontSize});
        };

        this.onFontColorChangeEvent = function (fontColor) {
          that.onFontColorChange({fontColor: fontColor});
        };
      },
      controllerAs: 'ctrl',
    };
  });
