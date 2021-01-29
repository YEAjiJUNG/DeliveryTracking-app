import React from 'react';
import {withRouter} from 'react-router-dom';
import { actionCreators } from '../../../_actions/user_action';
import { connect } from 'react-redux';
import HistoryItem from './HistoryItem';

const History = ({list, props}) => {
    console.log("List : ",list);
    
    const onClick = () => {

    }
        return(
    
        <div className="HistoryContainer">
            <div className="HeaderContainer">
                <title>최근 조회한 송장번호</title>
                
                
            </div>
            <div className="ListContainer">
                <div className="keywordContainer">
                    <ul>
                    {list.map((n, id) => <HistoryItem num={n.num} key={id}/>)}
                    </ul>
    
                    <button onClick={onClick}>
                        전체삭제
                    </button>
                </div>
            </div>
        </div>
        
    )
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps);
    return { list : state };
  }

export default connect(mapStateToProps, null)(History)