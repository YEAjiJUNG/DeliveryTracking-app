import React, { useState, useEffect } from 'react';
import CompanyList from './CompanyList';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function SelectCountry(props) {
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
    props.history.push('/');
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
          <form onSubmit={onSubmit}>
            <label>
              Pick your delivery company :
              <select value={value} onChange={onChange}>
                {companies.map((company, index) => (
                  <CompanyList
                    key={index}
                    name={company.Name}
                    code={company.Code}
                  ></CompanyList>
                ))}
              </select>
            </label>
            <button type="submit">find</button>
          </form>
        </div>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return { value };
}

export default connect(mapStateToProps, null)(SelectCountry);
