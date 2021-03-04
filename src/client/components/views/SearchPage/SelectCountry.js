import React, { useState, useEffect } from 'react';
import CompanyList from './CompanyList';
import axios from 'axios';

function SelectCountry() {
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    getCompanyList();
  });

  const getCompanyList = async () => {
    const Company = await axios.get('/localhost:5000/api/company_list');
    setLoading(false);
    setCompany(Company);

    console.log(company);
  };

  return (
    <div>
      {loading ? (
        <div>
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>dd</div>
      )}
    </div>
  );
}

export default SelectCountry;
