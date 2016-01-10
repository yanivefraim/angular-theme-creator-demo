declare var angular: any;
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
  getFontFamilyTypes() {
    return ['Helvetica','Ariel', 'fantasy','cursive'];
  }
}

/**
 * @ngdoc service
 * @name themeCreatorDemoApp.dataService
 * @description
 * # dataService
 * Service in the themeCreatorDemoApp.
 */
angular.module('themeCreatorDemoApp')
  .service('dataService', DataService);
