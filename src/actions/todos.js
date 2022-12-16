import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./types";

const addTodo = (title, content) => ({
  type: ADD_TODO,
  payload: {
    title,
    content,
  },
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export { addTodo, removeTodo, updateTodo };
