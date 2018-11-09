//@flow

import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import registerServiceWorker from "./utils/registerServiceWorker";
import { initializeStore } from "./state/store.js";
import "typeface-roboto";
import "./index.css";

const store = initializeStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
