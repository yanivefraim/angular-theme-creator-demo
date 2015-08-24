'use strict';

angular
  .module('themeCreatorFontColorComponentModule', [])
  .directive('fontColorComponent', function() {
    return {
      template: '<input id="fontColor" class="form-control" name="fontColor" value="{{ctrl.fontColor}}" ng-keyup="ctrl.fontColorChangedEvent()"/>',

      scope: {},
      bindToController: {
        fontColor: "@",
        fontColorChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function($scope, $element) {
        var that = this;
        this.fontColorChangedEvent = function() {
          var elementVal = $element.find('input').val(); //TODO: find better implementation here
          that.fontColorChanged({fontSize: elementVal});
        };
      }
    };
  });
