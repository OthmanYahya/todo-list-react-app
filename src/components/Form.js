import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault(); //Preventing the refreshing of the page when clicking the button
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 69420.69420 }]);
        setInputText(""); // resting the input text to an empty string
    }

    const statusHandler = (event) => {
        setStatus();
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );
}

export default Form;