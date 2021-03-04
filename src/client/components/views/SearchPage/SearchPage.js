import React from 'react';
import {withRouter} from 'react-router-dom';
import SearchBar from './SearchBar';
import History from './History';
import './SearchPage.scss';

const SearchPage = () => {

    return(
        <div className="OuterContainer">
            <div className="InnerContainer">
            <h3>운송장 번호 조회</h3>
                <SearchBar onAddKeyword/>
                <div className="History">
                    <History />
                </div>
                
            </div>
        </div>
    )
}

export default withRouter(SearchPage)