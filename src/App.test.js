import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces} from './App'

//functional testing
test('button has correct initial color', () => {
  render(<App />);

  //button has red color and name "change to blue"
  const buttonElement = screen.getByRole('button', { name: "Change to blue"});

  expect(buttonElement).toHaveStyle({
    backgroundColor: 'red',
  })

  // click button
  fireEvent.click(buttonElement)
  // what to expect after click: background color to turn blue
  expect(buttonElement).toHaveStyle({
    backgroundColor: 'blue'
  })
  // the text change as well
  expect(buttonElement.textContent).toBe('Change to red')

  
});

test('initial conditions', ()=> {
  render(<App />)

  //check if button starts enabled
  const buttonElement = screen.getByRole('button', { name: "Change to blue"});
  expect(buttonElement).toBeEnabled()
  //check if the checkbox starts not checked

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('button is disabled on checkbox checked', ()=> {
  render(<App />)
  const checkbox = screen.getByRole('checkbox')
  const buttonElement = screen.getByRole('button')
  fireEvent.click(checkbox)
  // what to expect after onClick button to be disabled
  expect(buttonElement).toBeDisabled()
  expect(buttonElement).toHaveStyle('background-color: gray')
  

  fireEvent.click(checkbox)
  expect(buttonElement).toBeEnabled()
  
})

// test('button turns blue on click', () => {
//   render(<App />)
//   const colorButton = screen.getByRole('button', { name: 'Change to blue'})

//   expect(colorButton).

// })

//unit test functions
//describe is to group several tests

describe('spaces before camel-case capital letters',()=>{
  test('Works with no inner capital letters', ()=> {
    //ubacujemo funkciju koju testiratom iz App.js
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works with no one inner capital letters', ()=> {
    //ubacujemo funkciju koju testiratom iz App.js
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works with no two inner capital letters', ()=> {
    //ubacujemo funkciju koju testiratom iz App.js
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
