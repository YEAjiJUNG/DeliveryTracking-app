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
                    {list.map((obj, index) => <HistoryItem num={obj.num} id={obj.id} key={index}/>)}
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
    // 어떤걸 return하면 그게 component의 props에 추가된다.
    //props에는 react-router 때문에 가져와진 애들이 포함된다.
  }



export default connect(mapStateToProps, null)(History)