'use strict';

angular
  .module('themeCreatorFontSizeComponentModule', [])
  .directive('fontSizeComponent', function() {
    return {
      template: '<input id="fontSize" class="form-control" type="number" name="fontSize" value="{{ctrl.fontSize}}" ng-keyup="ctrl.fontSizeChangedEvent()"/>',

      scope: {},
      bindToController: {
        fontSize: "@",
        fontSizeChanged: "&"
      },
      controllerAs: 'ctrl',
      controller: function($scope, $element) {
        var that = this;
        this.fontSizeChangedEvent = function() {
          var elementVal = $element.find('input').val(); //TODO: find better implementation here
          that.fontSizeChanged({fontSize: elementVal});
        };
      }
    };
  });
