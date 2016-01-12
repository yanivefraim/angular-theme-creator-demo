'use strict';
declare var angular: any;
//NG2
//import {Injectable} from 'angular2/core';

//@Injectable()
export class DataService {
  getFontFamilyTypes() {
    return ['Helvetica','Ariel', 'fantasy','cursive'];
  }
}

//NG1
angular.module('themeCreatorDemoApp')
  .service('dataService', DataService);
