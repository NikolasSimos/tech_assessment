import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import Home from '../pages/Home/Home';

describe('testing Home Page', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
        );
        expect(getByTestId('home-container')).toBeInTheDocument();
    });
});
