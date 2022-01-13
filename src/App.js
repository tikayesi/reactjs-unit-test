import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [check, setCheck] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const newCheck = check === true ? false : true;

  return (
    <div>
      <button
        style={{ backgroundColor: check ? "grey" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={check}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        id="enable-disable-button"
        type="checkbox"
        onClick={() => {
          setCheck(newCheck);
        }}
      />
      <label htmlFor="enable-disable-button">Enable - Disable button</label>
    </div>
  );
}

export default App;
