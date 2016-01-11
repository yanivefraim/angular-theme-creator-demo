//NG1
declare var angular: any;

class FontFamilyComponent {
  fonts: string[];
  fontFamilyChanged: Function;
  fontFamily: string;

  /* @ngInject */
  constructor(dataService: DataService) {
    this.fonts = dataService.getFontFamilyTypes();
  }

  fontFamilyChangedEvent() {
    this.fontFamilyChanged({fontFamily: this.fontFamily});
  }
}

angular
  .module('themeCreatorDemoApp')
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

//NG2
// import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
// import {DataService} from '../services/data-service';
//
// @Component({
//   selector: 'font-family-component',
//   template: `<select class="form-control" [ngModel]="fontFamily" (ngModelChange)="fontFamilyChangedEvent($event)">
//               <option *ngFor="#font of fonts" [value]="font">{{font}}</option>
//             </select>`,
//   providers: [DataService]
// })
//
// export class FontFamilyComponent {
//   fonts: string[];
//   @Output() fontFamilyChanged = new EventEmitter<string>();
//   @Input() fontFamily: string;
//
//   constructor(@Inject(DataService) dataService) {
//     this.fonts = dataService.getFontFamilyTypes();
//   }
//
//   fontFamilyChangedEvent($event) {
//     this.fontFamilyChanged.emit($event);
//   }
// }
