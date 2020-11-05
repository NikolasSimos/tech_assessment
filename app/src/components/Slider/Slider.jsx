/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import {Range, getTrackBackground} from 'react-range';

import './Slider.css';
/* Slider Component
   
*/
const Slider = props => {
    const {title, amount, index} = props;
    const MIN = 0;
    const MAX = 1000;

    const getColors = index => {
        switch (index) {
            case 0:
                return ['#58feee', '#ccc'];
            case 1:
                return ['#74c0f7', '#ccc'];
            case 2:
                return ['#fabcaf', '#ccc'];
            case 3:
                return ['#f9aada', '#ccc'];
            default:
                return ['#548BF4', '#ccc'];
        }
    };

    const getBoxShadowColors = index => {
        switch (index) {
            case 0:
                return '0 0 0 4px #58feee, 0 0 0 7px white, 0 0 0 8px #58feee';
            case 1:
                return '0 0 0 4px #74c0f7, 0 0 0 7px white, 0 0 0 8px #74c0f7';
            case 2:
                return '0 0 0 4px #fabcaf, 0 0 0 7px white, 0 0 0 8px #fabcaf';
            case 3:
                return '0 0 0 4px #f9aada, 0 0 0 7px white, 0 0 0 8px #f9aada';
            default:
                return '0 0 0 4px red, 0 0 0 7px white, 0 0 0 8px red';
        }
    };

    return (
        <div className="slider-container" data-testid="slider-container">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="slider-text">{title}</div> <div className="slider-text">{amount / 10}%</div>
            </div>
            <div className="slider">
                <Range
                    step={0.1}
                    min={MIN}
                    max={MAX}
                    values={[amount]}
                    onChange={values => ''}
                    renderTrack={({props, children}) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values: [amount],
                                    colors: getColors(index),
                                    min: MIN,
                                    max: MAX,
                                }),
                                alignSelf: 'center',
                            }}>
                            {children}
                        </div>
                    )}
                    renderThumb={({props}) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                borderRadius: '50%',
                                width: '10px',
                                height: '10px',
                                backgroundColor: '#999',
                                border: '5px solid #fff',
                                boxShadow: getBoxShadowColors(index),
                            }}
                        />
                    )}
                />
            </div>
        </div>
    );
};

Slider.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default Slider;
