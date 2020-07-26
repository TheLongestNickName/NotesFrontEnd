import homePageReducer from "./homePage-reducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({ homePage: homePageReducer });

let store = createStore(reducers);

window.store = store;

export default store;
