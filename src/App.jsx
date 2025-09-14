import { useState } from "react";

function App() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state dynamically
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Dynamic Input Form</h1>
      <form>
        <label>
          Type something:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange} // Attach onChange event
            placeholder="Enter text here"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
      </form>
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default App;
