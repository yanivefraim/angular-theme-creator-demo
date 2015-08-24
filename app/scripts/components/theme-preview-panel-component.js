'use strict';

angular
  .module('themePreviewPanelComponentModule', [])
  .directive('themePreviewPanelComponent', function($interpolate) {
    return {
      templateUrl: 'views/them-preview-panel-component.html',
      scope: {},
      bindToController: {
        fontSize: '@',
        fontColor: '@'
      },
      controller: function($scope) {
        var that = this;
        //TODO: refactor this hack
        var style = "font-family: ctrl.fontFamily; color: {{ctrl.fontColor}}; font-size: {{ctrl.fontSize}}px;";
        $scope.$watch('ctrl.fontSize + ctrl.fontColor', function () {
          that.styleProp = $interpolate(style)($scope);
        });
      },
      controllerAs: 'ctrl',
    };
  });
