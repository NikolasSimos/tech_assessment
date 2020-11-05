import React from 'react';
import PropTypes from 'prop-types';
// import icon1 from '../../src/public/icon1.png';

import './Tile.css';
/* Tile Component
   
*/
const Tile = props => {
    const {icon, title, description, link} = props;

    return (
        <div id="tile" className="tile-container">
            <div className="tile-icon">
                <img src={`${process.env.PUBLIC_URL + icon}.png`} id={icon} alt="altimage" />
            </div>
            <div className="tile-title">{title}</div>
            <div className="tile-description">{description}</div>
            <div className="tile-link">
                {link}
                {' >'}
            </div>
        </div>
    );
};

Tile.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Tile;
