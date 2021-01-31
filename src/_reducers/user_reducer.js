import { createStore } from 'redux';
import {
    DELETEALL_USER,
    DELETE_USER,
    DELIVERY_USER
} from '../_actions/types';

const reducer = (state = [], action) => {
    switch(action.type){
        case DELIVERY_USER:
            return [{ num: action.num, id: Date.now() }, ...state];
        
        case DELETE_USER:
            return state.filter(num => num.id !== action.id);
        
        case DELETEALL_USER:
            return [];

    default:
        return state;
    }
}

const store = createStore(reducer);


export default store;