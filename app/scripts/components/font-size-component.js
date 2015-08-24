'use strict';

angular
  .module('themeCreatorFontSizeComponentModule', [])
  .directive('fontSizeComponent', function() {
    return {
      template: '<input id="fontSize" class="form-control" name="fontSize" ng-model="ctrl.fontSize" ng-change="ctrl.fontSizeChangedEvent()"/>',
      scope: {},
      bindToController: {
        fontSize: "@",
        fontSizeChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function() {
        var that = this;
        this.fontSizeChangedEvent = function() {
          that.fontSizeChanged({fontSize: that.fontSize});
        };
      }
    };
  });
