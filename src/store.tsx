import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerResults from "./reducers/searchResultsReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { myProductListReducer } from "./reducers/myProductListReducer";

const reducer = combineReducers({
  reducerResults,
  myProductListReducer
});
export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
