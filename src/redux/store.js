import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import initialStore from "./initialStore";
import middleware from "./middleware";
import exampleReducer from "./reducers/exampleReducer";

export const store = createStore(
  combineReducers({
    example: exampleReducer
  }),
  initialStore,
  compose(
    applyMiddleware(middleware)
  )
);