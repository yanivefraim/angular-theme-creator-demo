
class FontFamilyComponent {
  fonts: string[];
  fontFamilyChanged: Function;
  fontFamily: string;

  constructor(dataService: any) {
    this.fonts = dataService.getFontFamilyTypes();
  }

  fontFamilyChangedEvent() {
    this.fontFamilyChanged({fontFamily: this.fontFamily});
  }
}

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
      controller: FontFamilyComponent
    };
  });
