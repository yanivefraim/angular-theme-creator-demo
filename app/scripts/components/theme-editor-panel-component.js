'use strict';

angular
  .module('themeEditorPanelComponentModule', ['themeCreatorFontSizeComponentModule', 'themeCreatorFontColorComponentModule'])
  .directive('themeEditorPanelComponent', function() {
    return {
      templateUrl: 'views/theme-editor-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: "@",
        fontFamily: "@",
        color: "@",
        onEditChange: "&"
      },
      controller: function() {
        var that = this;
        this.onChange = function (fontSize) {debugger;
          that.onEditChange({fontSize: fontSize});
        };
      },
      controllerAs: 'ctrl',
    };
  });
