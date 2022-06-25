import { render, screen } from '@testing-library/react';
import App from './App';

test('increase counter on click', () => {
  render(<App />);
  
  const rightButton = document.getElementById("id")
  
  console.log(rightButton.textContent())
  // expect(linkElement).toBeInTheDocument();
});
