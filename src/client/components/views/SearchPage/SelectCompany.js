import React, { useState, useEffect } from 'react';
import CompanyList from './CompanyList';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import './SelectCompany.scss';

function SelectCompany(props) {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState('');
  const [value, setValue] = useState('04');

  useEffect(() => {
    getCompanyList();
  });

  const getCompanyList = async () => {
    const data = await axios.get('/api/company_list');
    setCompanies(data.data.Company);
    setLoading(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('value', value);
  };

  return (
    <div>
      {loading ? (
        <div>
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="outLabel">
            <form onSubmit={onSubmit}>
              <label className="label">
                pick your delivery company :
                <select className="select" value={value} onChange={onChange}>
                  {companies.map((company, index) => (
                    <CompanyList
                      key={index}
                      name={company.Name}
                      code={company.Code}
                    ></CompanyList>
                  ))}
                </select>
              </label>

              <button className="button" type="submit">
                select
              </button>
            </form>
          </div>
          <div>
            <h3>운송장 번호 조회</h3>
            <SearchBar companyCode={value}></SearchBar>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(SelectCompany);
