'use strict';

angular
  .module('themePreviewPanelComponentModule', [])
  .directive('themePreviewPanelComponent', function() {
    return {
      templateUrl: 'views/them-preview-panel-component.html'
    };
  });
