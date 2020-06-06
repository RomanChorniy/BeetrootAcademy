import React from 'react';
import find from 'lodash/find';
import filter from 'lodash/filter';

import AddTodo from './AddTodo';
import ToDoList from "./ToDoList";

import { default as data } from '../../data/MOCK_DATA.json';

// const data = [];

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        };
    }

    onBtnClicked(text) {
        const data = this.state.data;
        data.push({
            id: Date.now(),
            text
        });
        this.setState({ data });
    }

    removeItem(id) {
        const { data } = this.state;
        find(this.state.data, (item, i) => {
            if (item.id === id) {
                item.status = 'delete';
                return item;
            }
        });

        this.setState({ data });
    }

    filterItems() {
        return filter(this.state.data, (item) => {
            return item.status !== 'delete';
        })
    }

    render() {
        return (
            <div className="container">
                <AddTodo onBtnClicked={this.onBtnClicked.bind(this)} />
                <h2>To Do List:</h2>
                <ToDoList
                    data={this.state.data}
                    removeItem={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default TodoContainer;