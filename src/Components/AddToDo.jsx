import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddToDo() {
  // const [toDoName, setToDoName] = useState();
  // const [dueDate, setDueDate] = useState();
  const { addNewItem } = useContext(TodoItemsContext);
  const useNameElement = useRef();
  const useDueDateElement = useRef();
  // const handleNameChange = (event) => {
  //   setToDoName(event.target.value);
  // };
  // const handleDueDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const toDoName = useNameElement.current.value;
    const toDoDueDate = useDueDateElement.current.value;
    useNameElement.current.value = "";
    useDueDateElement.current.value = "";
    // console.log(toDoName, toDoDueDate);
    addNewItem(toDoName, toDoDueDate);
    // setDueDate("");
    // setToDoName("");
  };
  return (
    <>
      <div className="container ">
        <form className="row kg-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={useNameElement}
              placeholder="Enter ToDo here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={useDueDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success s-btn">
              <IoIosAddCircle />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddToDo;
