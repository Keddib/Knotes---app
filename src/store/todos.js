import { createStore } from "redux";
import reducer from "src/reducers/root";

const initialState = {
  Todos: [
    {
      id: 0,
      title: "How to use",
      content: "This is a template note",
      date: "20:16",
    },
  ],
};

export default createStore(reducer, initialState);
