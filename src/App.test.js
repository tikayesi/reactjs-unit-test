import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// // - String renders learn react link merupakan sebuah string untuk memberitahu
// // bagian mana yang error ketika dijalankan.
// // - pada awal-awal test, sebenarnya ketika test dikosongkan dia akan tetap pass
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders learn react link with learn react words', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', {name: 'Learn React'});
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correct initial color', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: "Change to blue"})
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  // click button
  fireEvent.click(colorButton);
  // expect button tobe blue
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'})
  // expect button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')

})

test('initial condition', () => {
  render(<App/>)
  // check that the button starts out enable
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled();
  // check that the button start out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('checked condition', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  const checkBox = screen.getByRole('checkbox');
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
})