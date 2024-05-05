import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import "./todostyle.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ToDo() {
  const [toDos, setTodos] = useState("");
  const [toDoListItems, setTodoListItems] = useState([]);

  const addToDo = () => {
    const newItems = {
      id: uuidv1(),
      item: toDos,
      completed: false,
    };

    setTodoListItems([...toDoListItems, newItems]);
    setTodos("");
  };

  const handleToggle = (selectedTodoId) => {
    const newTodoList = toDoListItems.map((item) => {
      if (item.id === selectedTodoId) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    setTodoListItems(newTodoList);
  };

  const handleDeleteClick = (selectedTodoId) => {
    const newTodoList = toDoListItems.filter((item) => {
      return item.id !== selectedTodoId;
    });

    setTodoListItems(newTodoList);
  };

  return (
    <div className="main-container">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          value={toDos}
          placeholder="What is the task today?"
          onChange={(e) => setTodos(e.target.value)}
        />

        <button onClick={addToDo}>Add ToDos</button>
      </div>
      <div>
        <ul>
          {toDoListItems &&
            toDoListItems.map((item) => (
              <>
                <li key={item.id} className={item.completed ? "done" : ""}>
                  <span>{item.item}</span>
                  <span>
                    {item.completed ? (
                      <CancelIcon onClick={() => handleToggle(item.id)} />
                    ) : (
                      <CheckCircleIcon onClick={() => handleToggle(item.id)} />
                    )}
                    <DeleteIcon onClick={() => handleDeleteClick(item.id)} />
                  </span>
                </li>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}
