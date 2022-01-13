import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [check, setCheck] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const newCheck = check === true ? false : true;

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newButtonColor)} disabled={check}>
        Change to {newButtonColor}</button>
        <input type="checkbox" onClick={() => setCheck(newCheck)}/>
    </div>
  );
}

export default App;
