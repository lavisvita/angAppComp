function CompanyService() {
  "ngInject";
  const companiesData = [
    {
      name: "Company 1",
      about: "Incradible company"
    }
  ];

  return {
    getCompanies(){
      return companiesData;
    },
    addCompany(company) {
      const {name, about} = companiesData;
    }
    const tempCompanyData = {
      name,
      about
    };
    companiesData.push(tempCompanyData);
  }
}

export default CompanyService;
