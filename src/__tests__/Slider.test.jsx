import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from '@testing-library/react';
import Slider from '../components/Slider/Slider';

describe('testing Slider Component', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Slider title="test" amount={100} index={1} />
            </BrowserRouter>,
        );
        expect(getByTestId('slider-container')).toBeInTheDocument();
    });
});
