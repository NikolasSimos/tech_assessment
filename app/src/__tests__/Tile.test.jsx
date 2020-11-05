import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import Tile from '../components/Tile/Tile';

describe('testing Tile Component', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Tile icon="testIcon" title="testIcon" description="testDescription" link="testLink" />
            </BrowserRouter>,
        );
        expect(getByTestId('tile-container')).toBeInTheDocument();
    });
});
