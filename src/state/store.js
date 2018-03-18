/* @flow */
import "whatwg-fetch";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { logger } from "redux-logger";
import { reduxDataFX } from "redux-data-fx";
import { createStore, applyMiddleware, compose } from "redux";

import { API_URL } from "../constants/env";
import reducers from "./state.reducer.js";

let store;

export function initializeStore() {
  store = createStore(
    reducers,
    compose(applyMiddleware(...[thunk, promise, logger]), reduxDataFX)
  );

  store.registerFX("fetch", (params, getState, dispatch) => {
    console.log(params.body);
    fetch(API_URL + params.url, {
      method: params.method,
      body: JSON.stringify(params.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => JSON.parse(JSON.stringify(res)))
      .then(res =>
        dispatch({
          type: params.onSuccess,
          payload: res,
          timestamp: Date.now()
        })
      )
      .catch(res => dispatch({ type: params.onError, payload: res }));
  });
  return store;
}

export const getStore = () => store;
