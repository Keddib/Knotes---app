import { useEffect } from "react";
import store from "src/store/todos";
import { addTodo } from "src/actions/todos";

function App() {
  useEffect(() => {
    store.dispatch(addTodo("test one", "this is another test"));
  }, []);
  return <div className="app">hello world!</div>;
}

export default App;
