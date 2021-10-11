import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducers from "./rootReducers";

export function configureStore() {
  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
