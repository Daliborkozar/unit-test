import "./App.css";
import { useState } from "react";

export const replaceCamelWithSpaces = (word) => {
  return word.replace(/([A-Z]+)/g, ' $1').replace(/^ /, '')
};

function App() {
  const [btnClicked, setButtonClicked] = useState(false);
  const [checkbox, setCheckBox] = useState(false);
  const newButton = btnClicked ? "blue" : "red";
  const textColorbtn = btnClicked ? "white" : "black";
  const disabled = checkbox ? true : false;

  const handleClick = () => {
    setButtonClicked((prevstate) => !prevstate);
  };

  const handleCheckboxChange = () => {
    setCheckBox((prevstate) => !prevstate);
  };

  return (
    <div className="App">
      <button
        onClick={handleClick}
        style={{
          backgroundColor: disabled ? "gray" : newButton,
          color: textColorbtn,
        }}
        disabled={disabled}
      >
        {btnClicked ? "Change to red" : "Change to blue"}
      </button>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
