'use strict';

angular
  .module('themePreviewPanelComponentModule', [])
  .directive('themePreviewPanelComponent', function($interpolate) {
    return {
      templateUrl: 'views/them-preview-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: "@"
      },
      controller: function($scope) {
        var that = this;
        var style = "'font-family': ctrl.fontFamily; 'color': ctrl.fontColor; font-size: {{ctrl.fontSize}}px;";
        $scope.$watch('ctrl.fontSize', function () {
          that.styleProp = $interpolate(style)($scope);
        });
      },
      controllerAs: 'ctrl',
    };
  });
