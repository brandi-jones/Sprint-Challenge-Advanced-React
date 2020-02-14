import React from "react";
import NavBar from "./NavBar.js";
import App from "../App.js";
import { render, fireEvent, waitForElement, getByTestId, queryByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('it displays the Dark/Light Mode Button', () => {
    const container = render(<App />);
    container.getByTestId("toggleButton");
});