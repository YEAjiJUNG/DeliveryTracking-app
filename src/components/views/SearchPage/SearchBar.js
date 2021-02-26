import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';
import { FiSearch } from 'react-icons/fi';
import History from './History';
import { actionCreators } from '../../../_actions/user_action';

import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

const SearchBar = ({ addList }) => {
  const [num, setNum] = useState('');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanyList();
  });

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addList(num);
    setNum('');
  };

  const getCompanyList = async () => {
    const Company = await axios.get('/api/company_list');
    setLoading(false);

    console.log(Company);
  };

  return (
    <div>
      <div className="company">
        {loading ? (
          <div>
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>dd</div>
        )}
      </div>
      <div className="Container">
        <div></div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={num}
            className="inputContainer"
            onChange={onChange}
            placeholder="운송장 번호 입력"
          ></input>
          <button type="submit" className="btn">
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addList: (num) => dispatch(actionCreators.addList(num)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
