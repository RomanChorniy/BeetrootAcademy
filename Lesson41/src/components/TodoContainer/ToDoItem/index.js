import React from 'react';

function TodoItem(props) {
    return (<li
        key={props.id}
        className="todo-list-item">
        {props.text}
        <button
            className="remove"
            onClick={props.removeTodoItem.bind(this, props.id)}>
            Remove
        </button>
    </li>
    );
}

export default ToDoList;