// Test away!
import React from "react";
import Display from "./Display";
import { render, getByText } from "@testing-library/react";

test('Check if Closed', () => {
    const { getByTestId, rerender } = render(<Display closed />);
    getByTestId('closedOpen');

    rerender(<Display closed={false} />);
    getByTestId('closedOpen');
})

test('Check if Locked', () => {
    const { getByTestId, rerender } = render(<Display locked />);
    getByTestId('lockedUnlocked');

    rerender(<Display locked={false} />);
    getByTestId('lockedUnlocked');
})

test('Test if green Green', () => {
    const className = 'led green-led';
    const locked = false;
    const closed = false;
    const display = render(<Display closed={closed} locked={locked} className={className} />)
    expect(display.baseElement).toMatchSnapshot();
})

test('Test if Red green', () => {
    const className = 'led red-led';
    const locked = false;
    const display = render(<Display closed locked={locked} className={className} />)
    expect(display.baseElement).toMatchSnapshot();
})

test('Test if red Red', () => {
    const className = 'led red-led';
    const locked = true;
    const closed = true;
    const display = render(<Display closed locked={locked} className={className} />)
    expect(display.baseElement).toMatchSnapshot();
})
