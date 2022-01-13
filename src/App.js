import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [check, setCheck] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const newCheck = check === true ? false : true;

  return (
    <div>
      <button style={{ backgroundColor: check ? 'grey' : buttonColor }}
      onClick={() => setButtonColor(newButtonColor)} disabled={check}>
        Change to {newButtonColor}</button>
        <input id="enable-disable-button"
        type="checkbox" onClick={() => {setCheck(newCheck)
        }}/>
        <label htmlFor="enable-disable-button">Enable - Disable button</label>
    </div>
  );
}

export default App;
