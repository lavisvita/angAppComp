import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyListComponent from './companyList.component';

let companyListModule = angular.module('companyList', [
  uiRouter
])
  .component('companyList', companyListComponent)
  .name;

export default companyListModule;
