import React, { useState, useEffect } from 'react';
import CompanyList from './CompanyList';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function SelectCountry() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState('');

  useEffect(() => {
    getCompanyList();
  });

  const getCompanyList = async () => {
    const data = await axios.get('/api/company_list');
    setCompanies(data.data.Company);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div>
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          {companies.map((company, index) => (
            <CompanyList
              key={index}
              name={company.Name}
              code={company.Code}
            ></CompanyList>
          ))}
        </div>
      )}
    </div>
  );
}

export default withRouter(SelectCountry);
