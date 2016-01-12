import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
import {DataService} from '../services/data-service';

@Component({
  selector: 'font-family-component',
  template: `<select class="form-control" [ngModel]="fontFamily" (ngModelChange)="fontFamilyChangedEvent($event)">
              <option *ngFor="#font of fonts" [value]="font">{{font}}</option>
            </select>`
})

export class FontFamilyComponent {
  fonts: string[];
  @Output() fontFamilyChanged = new EventEmitter<string>();
  @Input() fontFamily: string;

  constructor(@Inject('dataService') dataService: DataService) {
    this.fonts = dataService.getFontFamilyTypes();
  }

  fontFamilyChangedEvent($event) {
    this.fontFamilyChanged.emit($event);
  }
}

// angular
//   .module('themeCreatorDemoApp')
//   .directive('fontFamilyComponent', function(dataService) {
//     return {
//       template: '<select class="form-control" ng-model="ctrl.fontFamily" ng-change="ctrl.fontFamilyChangedEvent()" ng-options="font for font in ctrl.fonts">',
//       scope: {},
//       bindToController: {
//         fontFamily: "@",
//         fontFamilyChanged: "&"
//       },
//       controllerAs: 'ctrl',
//       controller: FontFamilyComponent
//     };
//   });
//
