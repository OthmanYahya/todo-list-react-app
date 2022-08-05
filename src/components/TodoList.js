import React from "react";
import Todo from "./Todo.js"


const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}//Called "key" because JavaScript doesn't like other names for an ID.
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;