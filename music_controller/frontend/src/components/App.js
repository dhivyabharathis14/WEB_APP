import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import HomePage from "./HomePage"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HomePage /> 
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />, appDiv);