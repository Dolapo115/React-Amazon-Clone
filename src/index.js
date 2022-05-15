import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./App";
import {DataLayer} from "./StateProvider";
import reducer, {initialState} from './reducer'

function Index() {
  return (
    <DataLayer initialState = {initialState} reducer = {reducer}>
      <div className="index">
        <App />
      </div>
    </DataLayer>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
