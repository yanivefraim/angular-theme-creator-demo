import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
import {DataService} from '../services/data-service';

@Component({
  selector: 'font-family-component',
  template: `<select class="form-control" [ngModel]="fontFamily" (ngModelChange)="fontFamilyChangedEvent($event)">
              <option *ngFor="#font of fonts" [value]="font">{{font}}</option>
            </select>`,
  providers: [DataService]
})

export class FontFamilyComponent {
  fonts: string[];
  @Output() fontFamilyChanged = new EventEmitter<string>();
  @Input() fontFamily: string;

  constructor(@Inject(DataService) dataService) {
    this.fonts = dataService.getFontFamilyTypes();
  }

  fontFamilyChangedEvent($event) {
    this.fontFamilyChanged.emit($event);
  }
}
