import { Toaster } from "react-hot-toast";
import "./App.css";
import AddTodos from "./components/AddTodos";
import ShowTodos from "./components/ShowTodos";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />

      <h2 className="App__heading">Todos</h2>
      <TodoProvider>
        <AddTodos />
        <ShowTodos />
      </TodoProvider>
    </div>
  );
}

export default App;
