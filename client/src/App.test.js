import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from "./components/PlayerCard.js";
import {render, getByText, getByTestId} from "@testing-library/react";

test('renders header without crashing', () => {
  const header = render(<App />);
  header.getByText(/women's world cup players/i);

})

//test('test card component can render', () => {
//  const card = render(<PlayerCard />);
//  card.getByTestId("cardTest");
//})