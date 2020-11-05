/* eslint-disable react/require-default-props */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        const {children} = this.props;
        this.state = {
            activeTab: children[0] ? children[0].props.label : false,
        };
    }

    onClickTabItem = tab => {
        this.setState({activeTab: tab});
    };

    render() {
        const {
            onClickTabItem,
            props: {children, styles},
            state: {activeTab},
        } = this;

        return (
            <>
                <ol className="tab-list">
                    {children.map(child => {
                        const {label} = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                noRouter={false}
                                styles={styles || ''}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
            </>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    styles: PropTypes.string,
};

export default Tabs;
