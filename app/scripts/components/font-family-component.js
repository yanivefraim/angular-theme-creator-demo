'use strict';

angular
  .module('themeCreatorFontFamilyComponentModule', [])
  .directive('fontFamilyComponent', function(dataService) {
    return {
      template: '<select class="form-control" ng-model="ctrl.fontFamily" ng-change="ctrl.fontFamilyChangedEvent()" ng-options="font for font in ctrl.fonts">',
      scope: {},
      bindToController: {
        fontFamily: "@",
        fontFamilyChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function() {
        this.fonts = dataService.getFontFamilyTypes(); //['Helvetica','Ariel', 'fantasy','cursive'];
        var that = this;
        this.fontFamilyChangedEvent = function() {
          that.fontFamilyChanged({fontFamily: that.fontFamily});
        };
      }
    };
  });
