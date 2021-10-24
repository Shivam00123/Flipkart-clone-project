import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { configStore } from "./store";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
</style>;

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
