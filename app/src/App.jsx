import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Page2 from './pages/Page2/Page2';

const App = () => {
    const location = useLocation();
    return (
        <div>
            <Navbar location={location} />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Page-2" component={Page2} />
            </Switch>
        </div>
    );
};
export default App;
