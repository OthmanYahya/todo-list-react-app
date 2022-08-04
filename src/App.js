import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); // The list of todo tasks
  const [status, setStatus] = useState("all"); // The status of the todo tasks.

  return (
    <div className="App">

      <header>
        <h1>Othman's Todo List</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
