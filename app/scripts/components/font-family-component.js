'use strict';

angular
  .module('themeCreatorFontFamilyComponentModule', [])
  .directive('fontFamilyComponent', function() {
    return {
      template: '<select class="form-control" ng-model="ctrl.fontFamily" ng-change="ctrl.fontFamilyChangedEvent()" ng-options="item for item in ctrl.items">',
      scope: {},
      bindToController: {
        fontFamily: "@",
        fontFamilyChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function() {
        this.items = ['Helvetica','Ariel', 'fantasy','cursive'];
        var that = this;
        this.fontFamilyChangedEvent = function() {
          that.fontFamilyChanged({fontFamily: that.fontFamily});
        };
      }
    };
  });
