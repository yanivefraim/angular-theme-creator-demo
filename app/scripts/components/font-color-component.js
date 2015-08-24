'use strict';

angular
  .module('themeCreatorFontColorComponentModule', [])
  .directive('fontColorComponent', function() {
    return {
      template: '<input id="fontColor" class="form-control" name="fontColor" ng-model="ctrl.fontColor" ng-change="ctrl.fontColorChangedEvent()"/>',

      scope: {},
      bindToController: {
        fontColor: '@',
        fontColorChanged: '&'
      },
      controllerAs: 'ctrl',
      controller: function() {
        var that = this;
        this.fontColorChangedEvent = function() {
          that.fontColorChanged({fontColor: that.fontColor});
        };
      }
    };
  });
