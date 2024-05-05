import React, { useRef, useState } from "react";
import "./style.css";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");
  console.log(todos);
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
    }
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const filterData = todos.filter((e) => e.id !== id);
    setTodos(filterData);
  };

  const handleUpdateText = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text;
      }
      return e;
    });

    setTodos(updatedList);
  };
  return (
    <div className="app">
      <h1>To DO List</h1>
      <input
        type="text"
        placeholder="Enter your to dos"
        onKeyPress={handleKeypress}
        ref={inputRef}
      />
      {todos.map((e) => (
        <Item
          {...e}
          key={e.id}
          updateCompleted={handleCompleted}
          deleteToDo={handleDelete}
          updateText={handleUpdateText}
        />
      ))}
    </div>
  );
}

const Item = ({
  text,
  completed,
  id,
  updateCompleted,
  deleteToDo,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editInputText, setEditInputText] = useState(text);
  return (
    <div className="item">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => setEdit(true)}
      >
        {edit ? (
          <input
            type="text"
            value={editInputText}
            onChange={(e) => setEditInputText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              updateText(id, editInputText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => deleteToDo(id)}>
        X
      </div>
    </div>
  );
};
