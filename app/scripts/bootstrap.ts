//NG2
declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import {FontFamilyComponent} from './components/font-family-component';
import {DataService} from "./services/data-service";

let adapter = new UpgradeAdapter();

angular
.module('themeCreatorDemoApp')
  .directive('fontFamilyComponent', adapter.downgradeNg2Component(FontFamilyComponent));

adapter.upgradeNg1Provider('dataService');

adapter.bootstrap(document.body, ['themeCreatorDemoApp', DataService]);
