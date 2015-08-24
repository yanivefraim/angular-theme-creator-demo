'use strict';

angular
  .module('themeCreatorFontSizeComponentModule', [])
  .directive('fontSizeComponent', function($parse) {
    return {
      template: '<input id="fontColor" class="form-control" type="number" name="fontSize" value="{{ctrl.fontSize}}" ng-keyup="ctrl.fontSizeChanged(ctrl.$element.text())"/>',
      scope: {},
      bindToController: {
        fontSize: "@",
        fontSizeChanged: "&"
      },
      link: function(scope, element, attrs, ctrl) {
        angular.element(element.find('input')).val(scope.ctrl.fontSize); //TODO: This is step one!! use ng2-model directive on the input  for this
      },
      controllerAs: 'ctrl',
      controller: function($element) {
        this.$element = $element;
      }
    };
  });
