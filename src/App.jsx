import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import TodoItems from "./Components/TodoItems";
import "./app.css";
import WelcomeMsg from "./Components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
