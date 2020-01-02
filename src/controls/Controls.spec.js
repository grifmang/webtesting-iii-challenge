import React from "react";
import Controls  from "./Controls";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

// Test away!

test('Provides button for closed and open', () => {
    const constProps = { closed: false, locked: false }
    const { getByText } = render(<Controls {...constProps} />)
    getByText(/close gate/i);
})

test('Close Gate button text changes to Open Gate', () => {
    const constProps = { closed: false, locked: false }
    const jestFn = jest.fn(() => {
        constProps.closed = !constProps.closed;
    })
    const { getByText, rerender } = render(<Controls {...constProps} toggleClosed={jestFn} />);
    const button = getByText(/close gate/i);
    fireEvent.click(button);
    rerender(<Controls {...constProps} />)
    expect(button.innerHTML).toBe('Open Gate');
  });

  test('Lock Gate button text changes to Unlock Gate', () => {
    const constProps = { closed: true, locked: false }
    const jestFn = jest.fn(() => {
        constProps.locked = !constProps.locked;
    })
    const { getByText, rerender } = render(<Controls {...constProps} toggleLocked={jestFn} />);
    const button = getByText(/lock gate/i);
    fireEvent.click(button);
    rerender(<Controls {...constProps} />)
    expect(button.innerHTML).toBe('Unlock Gate');
  });

  test('Check if Lock/Unlock is disabled when gate is open', () => {
    const constProps = { closed: false, locked: false }
    const { getByText } = render(<Controls {...constProps} />)
    expect(getByText(/lock gate/i).closest('button')).toHaveAttribute('disabled');
  })

  test('Check if Open/Closed is disabled when gate is locked', () => {
    const constProps = { closed: true, locked: true }
    const { getByText } = render(<Controls {...constProps} />)
    expect(getByText(/open gate/i).closest('button')).toHaveAttribute('disabled');
  })