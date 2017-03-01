class CompanyController {
  constructor($state, companyService){
    "ngInject";
    this.companyPage = "Создать компанию";
    this.$state       = $state;
    this.companyService = companyService;

    this.companiesData = {};
  }
  addGoat() {
    if(!this.company.name) return console.log('Name is Required');
    if(!this.company.about) return console.log('Information about is Required');

    this.companyService.createCompany(this.goat);

    // reset the form
    this.companiesData = {};

    // go to home page, to see our entry
    this.$state.go('app.home');
  }
}

export default CompanyController;
