/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Tab extends Component {
    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: {activeTab, label, styles, noRouter},
        } = this;

        let className = `tab-list-item ${styles}`;

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return noRouter ? (
            <div id="wrapper">
                <button type="button" className={className} onClick={onClick}>
                    {label}
                </button>

                {activeTab === label && <div className={`dot navbar ${styles}`} />}
            </div>
        ) : (
            <div id="wrapper">
                <Link className={className} to={label} onClick={onClick}>
                    {label}
                </Link>
                {activeTab === label && <div className={`dot navbar ${styles}`} />}
            </div>
        );
    }
}

Tab.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    activeTab: PropTypes.bool,
    styles: PropTypes.string,
    noRouter: PropTypes.bool,
};

Tab.defaultProps = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    activeTab: PropTypes.bool,
    styles: PropTypes.string,
    noRouter: PropTypes.bool,
};

export default Tab;
