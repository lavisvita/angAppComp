class CompanyListingCtrl {
  constructor(CompanyService) {
    "ngInject";

    // This will keep the service instance across our class
    this.CompanyService = CompanyService;

    // this will gold our goatsList, it will be passed to the other components.
    this.companiesList = CompanyService.companiesData
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
}

export default CompanyListingCtrl;
