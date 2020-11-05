import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render, waitFor} from '@testing-library/react';
import App from '../App';

describe('testing App', () => {
    it('should redirect to /Home', () => {
        const {getByTestId} = render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );
        waitFor(() => expect(window.location.pathname).toBe('/Home'));
        expect(getByTestId('home-container')).toBeInTheDocument();
    });
    it('should go to /Page-2', () => {
        const {getByTestId} = render(
            <MemoryRouter initialEntries={['/Page-2']}>
                <App />
            </MemoryRouter>,
        );
        waitFor(() => expect(window.location.pathname).toBe('/Page-2'));
        expect(getByTestId('page-2-container')).toBeInTheDocument();
    });
});
