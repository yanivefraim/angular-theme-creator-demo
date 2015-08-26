'use strict';

angular
  .module('themeEditorPanelComponentModule', ['themeCreatorFontSizeComponentModule', 'themeCreatorFontColorComponentModule', 'themeCreatorFontFamilyComponentModule'])
  .directive('themeEditorPanelComponent', function() {
    return {
      templateUrl: 'views/theme-editor-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: '@',
        fontFamily: '@',
        fontColor: '@',
        onFontColorChange: '&',
        onFontSizeChange: '&',
        onFontFamilyChange: '&'

      },
      controller: function() {
        var that = this;
        this.onFontSizeChangeEvent = function (fontSize) {
          that.onFontSizeChange({fontSize: fontSize});
        };

        this.onFontColorChangeEvent = function (fontColor) {
          that.onFontColorChange({fontColor: fontColor});
        };

        this.onFontFamilyChangeEvent = function (fontFamily) {
          that.onFontFamilyChange({fontFamily: fontFamily});
        };
      },
      controllerAs: 'ctrl',
    };
  });
