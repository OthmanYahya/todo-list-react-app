import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault(); //Preventing the refreshing of the page when clicking the button
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 69420.69420 }
        ]);
        setInputText(""); // resting the input text to an empty string
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    className="todo-input"
                    value={inputText}
                    onChange={inputTextHandler}
                />
                <button
                    type="submit"
                    className="todo-button"
                    onClick={submitTodoHandler}
                >
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select
                        className="filter-todo"
                        name="todos"
                        onChange={statusHandler}
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </>
    );
}

export default Form;