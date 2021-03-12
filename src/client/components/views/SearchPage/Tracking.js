import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const Tracking = ({ fD }) => {
  console.log(fD.where);

  return (
    <div>
      <h2>위치</h2>
      <div>{fD.where}</div>
    </div>
  );
};

export default withRouter(Tracking);
