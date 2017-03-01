import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import NavBar from './navbar/navbar';
import Company from './createCompany/createCompany';
import CompanyList from './companyList/CompanyList';
let componentModule = angular.module('app.components', [
  Home,
  About,
  NavBar,
  Company,
  CompanyList
])
.name;

export default componentModule;
