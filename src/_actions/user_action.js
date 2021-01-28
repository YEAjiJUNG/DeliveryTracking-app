import store from '../_reducers/user_reducer';
import {
    DELIVERY_USER,
    DELETE_USER
} from './types';

const addList = num => {
    return {
        type: DELIVERY_USER,
        num
    }
}

const deleteList = (id) =>{
    return{
        type: DELETE_USER,
    }
}

export const actionCreators = {
    addList,
    deleteList
}

export default store;