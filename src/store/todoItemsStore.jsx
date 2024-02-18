import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

//for Reducer
const toDoItemsReducer = (currValue, action) => {
  let newToDoItem = currValue;
  if (action.type === "NEW_ITEM") {
    newToDoItem = [
      ...currValue,
      { name: action.Payload.itemName, dueDate: action.Payload.dueDate },
    ];
    return newToDoItem;
  } else if (action.type === "DELETE_ITEM") {
    newToDoItem = currValue.filter(
      (item) => item.name !== action.Payload.toDoName
    );
  }
  return newToDoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [toDoItems, dispatchToDoItems] = useReducer(toDoItemsReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      Payload: { itemName, dueDate },
    };
    dispatchToDoItems(newItemAction);
  };
  const deleteItem = (toDoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      Payload: {
        toDoName,
      },
    };
    return dispatchToDoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ toDoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
