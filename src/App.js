import React, { Component } from "react";
import AutoComplete from "./AutoComplete";
import USStates from "./data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="auto-complete">
          <AutoComplete data={USStates} />
        </div>
      </div>
    );
  }
}

export default App;
