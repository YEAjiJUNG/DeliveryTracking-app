import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function CompanyList({ name, code }) {
  return <option value={code}>{name}</option>;
}

export default withRouter(CompanyList);
