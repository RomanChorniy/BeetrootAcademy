import React from 'react';

import TodoItem from '../ToDoItem'
// import ListTask from '../ListTask';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        const { data } = this.props;
        if (data) {
            return data.map((item, i) => {
                return
                <TodoItem
                    key={i}
                    id={this.id}
                    text={this.text}>
                //<li
                //     key={i}
                //     className="todo-list-item">
                //     {item.text}
                //     {/* <ListTask text={item.text} /> */}
                // </li>;
            });
        }
    }

    render() {
        return (
            <div>
                <ul className="doto-list">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default ToDoList;