import React from "react";
import Dashboard from "./Dashboard";
import { render, getByTestId } from "@testing-library/react";

// Test away
test('Check if Dashboard renders', () => {
    const { getAllByText } = render(<Dashboard />)
    getAllByText(/lock/i);
})