import React, { Component } from "react";
import "./App.css";
import BingoBackgroundContainer from "./containers/BingoBackgroundContainer";
import Buttons from "./components/Buttons/Buttons";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BingoBackgroundContainer />
        <Buttons />
      </div>
    );
  }
}

export default App;
