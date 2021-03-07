import React from 'react';
import { withRouter } from 'react-router-dom';
import './CompanyList.scss';

function CompanyList({ name, code }) {
  return (
    <div className="out">
      <div className="name">
        <button className="button" name={name} value={code}>
          {name}
        </button>
      </div>
    </div>
  );
}

export default withRouter(CompanyList);
