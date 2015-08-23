'use strict';

angular
  .module('themeEditorPanelComponentModule', ['themeCreatorFontSizeComponentModule'])
  .directive('themeEditorPanelComponent', function() {
    return {
      templateUrl: 'views/theme-editor-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: "=",
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
