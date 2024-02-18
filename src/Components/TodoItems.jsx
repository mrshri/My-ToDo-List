/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItems = () => {
  const { toDoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {toDoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoItem={item.name}
            toDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
