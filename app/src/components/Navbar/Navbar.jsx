import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Carousel} from 'react-responsive-carousel';

import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Navbar.css';

/* NavBar Component
   Navigation static bar used for both Pages
*/

const NavBar = ({location}) => {
    /* on Refresh set the correct Active tab
     */
    const routerPage = location && location.pathname && location.pathname.replace(/\//g, '');
    const [tabsAreLoaded, setTabsAreLoaded] = useState(false);
    const [tabs, setTabs] = useState([]);
    const [slidesAreLoaded, setSlidesAreLoaded] = useState(false);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('https://voda-react-assessment.herokuapp.com/menu')
            .then(res => res.json())
            .then(
                result => {
                    setTabsAreLoaded(true);
                    setTabs(result);
                },
                error => {},
            );
        fetch('https://voda-react-assessment.herokuapp.com/slider')
            .then(res => res.json())
            .then(
                result => {
                    setSlidesAreLoaded(true);
                    setSlides(result);
                },
                error => {},
            );
    }, []);

    return (
        <div className="container">
            <div className="col-4 tabs">
                {tabsAreLoaded && tabs && tabs.length > 0 && (
                    <Tabs routerPage={routerPage}>
                        {tabs.map(tab => (
                            <div key={tab.title} label={tab.title}>
                                {tab.title}
                            </div>
                        ))}
                    </Tabs>
                )}
                <Search>Search</Search>
            </div>
            <div className="carousel-wrapper">
                {slidesAreLoaded && (
                    <Carousel autoPlay showThumbs={false} showStatus={false}>
                        {slides.map(slide => (
                            <div key={slide.title} className="carousel-item">
                                <img src={slide.image} className="carousel-item" alt="altimage" />
                                <h1 className="header" label={slide.title}>
                                    {slide.title}
                                </h1>
                                <h4 className="subtitle" label={slide.subtitle}>
                                    {slide.subtitle}
                                </h4>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

NavBar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

NavBar.defaultProps = {
    location: {},
};
export default NavBar;
