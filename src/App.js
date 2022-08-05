import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    //states stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]); // The list of todo tasks objects
    const [status, setStatus] = useState("all"); // The status of the todo tasks.
    const [filteredTodos, setFilteredTodos] = useState([]); // The list of filtered todo tasks

    //run once when the app start
    useEffect(() => {
        getLocalTodos();
    }, [])

    //useEffect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    //functions
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        };
    };

    //save to local storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            console.log(todoLocal);
            setTodos(todoLocal);
        };
    };

    return (
        <div className="App">
            <header>
                <h1>Othman's Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
