import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import NavBar from '../components/Navbar/Navbar';

describe('testing NavBar Component', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>,
        );
        expect(getByTestId('navbar-container')).toBeInTheDocument();
    });
});
