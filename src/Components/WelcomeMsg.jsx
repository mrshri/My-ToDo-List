import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelcomeMsg = () => {
  const { toDoItems } = useContext(TodoItemsContext);

  // console.log(contexObj);
  return (
    toDoItems.length === 0 && <p className="welcomeMsg"> Enjoy Your Day</p>
  );
};

export default WelcomeMsg;
