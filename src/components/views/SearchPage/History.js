import React from 'react';
import {withRouter} from 'react-router-dom';

const History = () => {

    return(
        <div className="HistoryContainer">
            <div className="HeaderContainer">
                <title>최근 조회한 송장번호</title>
                <removeText>전체삭제</removeText>
            </div>
            <div className="ListContainer">
                <div className="keywordContainer">
                    <keyword></keyword>
                    <button>
                        삭제
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default withRouter(History);