import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render, waitForElement} from '@testing-library/react';
import App from '../App';

describe('testing App', () => {
    it('should redirect to /Home', () => {
        const {getByTestId} = render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );
        waitForElement(() => expect(window.location.pathname).toBe('/Home'));
        expect(getByTestId('home-container')).toBeInTheDocument();
    });
    it('should go to /error /Page-2', () => {
        const {getByTestId} = render(
            <MemoryRouter initialEntries={['/Page-2']}>
                <App />
            </MemoryRouter>,
        );
        waitForElement(() => expect(window.location.pathname).toBe('/Page-2'));
        expect(getByTestId('home-container')).toBeInTheDocument();
    });
});
