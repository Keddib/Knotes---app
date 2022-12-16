import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "src/actions/types";

export default function mainReducer(state, action) {
  if (action.type == ADD_TODO) {
    // do work
    console.log("action : ", action);
  }
  if (action.type == REMOVE_TODO) {
    // do work
  }
  if (action.type == UPDATE_TODO) {
    // do works
  }
  return state;
}
