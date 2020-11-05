import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import Page2 from '../pages/Page2/Page2';

describe('testing Page2', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Page2 />
            </BrowserRouter>,
        );
        expect(getByTestId('page-2-container')).toBeInTheDocument();
    });
});
