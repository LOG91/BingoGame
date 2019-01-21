import React, { Component } from "react";
import "./App.css";
import BingoBackgroundContainer from "./containers/BingoBackgroundContainer";
// import Buttons from "./components/Buttons/Buttons";
import ButtonsContainer from "./containers/ButtonsContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BingoBackgroundContainer />
        <ButtonsContainer />
      </div>
    );
  }
}

export default App;
