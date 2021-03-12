import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import History from './History';
import './SearchPage.scss';
import SelectCompany from './SelectCompany';
import Tracking from './Tracking';

const SearchPage = () => {
  return (
    <div>
      <div className="OuterContainer">
        <div className="InnerContainer">
          <SelectCompany></SelectCompany>
          <div className="History"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default withRouter(SearchPage);
