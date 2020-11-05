import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {faSearch, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './Search.css';
/* Search Component
   
*/
const Search = () => {
    const [text, SetText] = useState('');

    return (
        <div className="searchContainer">
            <input type="text" className="input-search" onChange={e => SetText(e.target.value)} />
            <FontAwesomeIcon aria-label="delete button" color="black" size="sm" icon={faSearch} />
        </div>
    );
};

Search.propTypes = {
    fields: PropTypes.shape({
        firstName: PropTypes.shape({label: PropTypes.string}),
        lastName: PropTypes.shape({label: PropTypes.string}),
        email: PropTypes.shape({label: PropTypes.string}),
    }).isRequired,
};

export default Search;
