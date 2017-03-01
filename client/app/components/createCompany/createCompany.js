import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CreateComponentComponent from './createCompany.component';

let companyModule = angular.module('company', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('createcompany', {
      url: '/',
      component:'company'
    })
})
.component('company', CreateComponentComponent)
.name;

export default companyModule;
