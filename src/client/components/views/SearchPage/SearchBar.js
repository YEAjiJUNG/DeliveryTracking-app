import React, { useState, useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import './SearchBar.scss';
import { FiSearch } from 'react-icons/fi';
import History from './History';
import { actionCreators } from '../../../../_actions/user_action';
import axios from 'axios';
import Tracking from './Tracking';

import { connect } from 'react-redux';

function SearchBar({ addList, companyCode }) {
  const [num, setNum] = useState('');
  const [waybillNum, setWaybillNum] = useState('');
  const [deliveryData, setDeliveryData] = useState([]);

  useEffect(() => {
    getWaybillNum();
  }, [waybillNum]);

  useEffect(() => {
    console.log('dD', deliveryData);
  }, [deliveryData]);

  const getWaybillNum = async () => {
    const data = await axios.get(
      '/api/tracking_info/waybillNumber/' +
        waybillNum +
        '/company_code/' +
        companyCode
    );
    console.log('Get Data from API ', data);
    console.log(
      '/api/tracking_info/waybillNumber/' +
        waybillNum +
        '/company_code/' +
        companyCode
    );
    setDeliveryData(data.data);
  };

  const onChange = (e) => {
    setNum(e.target.value);
    console.log('onChange function ', num);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addList(num);
    console.log('Waybill Num', num, 'waybill ', waybillNum);
    setWaybillNum(num);
    setNum('');
  };

  console.log('Before Rendering ', deliveryData);

  return (
    <div>
      <div>
        <div className="company">
          <div className="Container">
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
          <div>
            <History></History>
          </div>
        </div>
      </div>
      <div>
        {deliveryData.hasOwnProperty('status') ? (
          console.log('유효하지 않은 운송장 번호입니다.')
        ) : (
          <div>
            {deliveryData.firstDetail ? (
              <Tracking fD={deliveryData.firstDetail} />
            ) : (
              <div>dd</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (num) => dispatch(actionCreators.addList(num)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
