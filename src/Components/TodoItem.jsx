import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";
/* eslint-disable react/prop-types */
function TodoItem({ todoItem, toDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoItem}</div>
          <div className="col-4">{toDate}</div>
          <div className="col-2">
            <button
              className="btn btn-danger s-btn"
              onClick={() => deleteItem(todoItem)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
