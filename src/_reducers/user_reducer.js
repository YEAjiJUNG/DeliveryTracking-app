import { createStore } from 'redux';
import {
    DELIVERY_USER
} from '../_actions/types';

const reducer = (state = [], action) => {
    switch(action.type){
        case DELIVERY_USER:
            return [{ num: action.num }, ...state];

    default:
        return state;
    }
}

const store = createStore(reducer);


export default store;