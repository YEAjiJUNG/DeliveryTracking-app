import React from 'react';
import './HistoryItem.scss';
import { connect } from 'react-redux';
import { actionCreators } from '../../../_actions/user_action';

const HistoryItem = ({num, btnClick}) => {
    console.log("Item", num)


    return(
            <li className="Item">
               {num}<button className="delete" onClick={btnClick}>삭제</button>
            </li>
    
    )

    
}


function mapDispatchToProps(dispatch, ownProps){
    console.log("ownProps",ownProps);
    return{
        btnClick : () => dispatch(actionCreators.deleteList(ownProps.id))
    };
}


export default connect(null, mapDispatchToProps)(HistoryItem)