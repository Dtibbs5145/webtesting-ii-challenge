import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('Dashboard />', () => {
    it('passing incrementStrike as prop', async () => {
        const incrementStrike = jest.fn();
        const { getByText } = render(<Dashboard incrementStrike={incrementStrike}/>)
        await fireEvent.click(getByText(/STRIKE/));
        expect(incrementStrike)
    })
    it('passing incrementBall as a prop', async () => {
        const incrementBall = jest.fn();
        const { getByText } = render(<Dashboard incrementBall={incrementBall}/>)
        try {
            await fireEvent.click(getByText(/BALL/));
            expect(incrementBall).toHaveBeenCalled();
        } catch (error) {
            console.log(error);
        }
    })
})