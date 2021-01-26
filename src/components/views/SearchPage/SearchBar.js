import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './SearchBar.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {

    const [num, setNum] = useState();
    

    const onChange = (e) => {
        setNum(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return(
        <div className="Container">
            <form>
            <input type="text" className="inputContainer" onChange={onChange} placeholder="운송장 번호 입력"></input>
            <button type="submit" onSubmit={onSubmit}>FontAwesomeIcon icon={faSearch}</button>
            </form>
            
        </div>
    )
    
}

export default withRouter(SearchBar)