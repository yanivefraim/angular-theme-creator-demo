'use strict';

angular
  .module('themeCreatorFontFamilyComponentModule', [])
  .directive('fontFamilyComponent', function() {
    return {
      template: '<select class="form-control" ng-model="ctrl.fontFamily" ng-change="ctrl.fontFamilyChangedEvent()">'+
                +'<option value="Helvetica">Helvetica</option>'+
                +'</select>',
      scope: {},
      bindToController: {
        fontFamily: "@",
        fontFamilyChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function() {
        alert(this.fontFamily);
        var that = this;
        this.fontFamilyChangedEvent = function() {
          that.fontFamilyChanged({fontFamily: that.fontFamily});
        };
      }
    };
  });
