import store from '../_reducers/user_reducer';
import {
    DELIVERY_USER,
    DELETE_USER,
    DELETEALL_USER
} from './types';

const addList = (num) => {
    return {
        type: DELIVERY_USER,
        num
    }
}

const deleteList = (id) =>{
    return{
        type: DELETE_USER,
        id: parseInt(id)
    }
}

const deleteAll = () => {
    return{
        type: DELETEALL_USER
    }
}

export const actionCreators = {
    addList,
    deleteList,
    deleteAll
}

export default store;