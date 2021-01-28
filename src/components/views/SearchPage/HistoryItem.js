import React from 'react';
import './HistoryItem.scss';
import { connect } from 'react-redux';
import { actionCreators } from '../../../_actions/user_action';

const HistoryItem = ({num}) => {
    console.log("Item", num)

    return(
            <li className="Item">
               {num}<button className="delete" >삭제</button>
            </li>
    
    )

    
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        delete : () => dispatch(actionCreators.deleteList(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(HistoryItem);