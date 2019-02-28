import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from 'redux';
import content from './control/content/reducer';
import main from './control/main/reducer';
import ui from './control/ui/reducer';

import form from './data/form/reducer';

const reducer = combineReducers({
  main, ui, content,
  form
});

const error = (store) => (next) => (action) => {
  try{ next(action); }
  catch(err){ console.log("error! ", err); }
}
var middleware = applyMiddleware(error, thunk);

const store = createStore(reducer, {}, middleware);
export default store;
