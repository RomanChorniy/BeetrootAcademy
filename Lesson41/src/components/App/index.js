import React from 'react';
import './style.scss';
import Header from "../Header";
import TodoContainer from "../TodoContainer";
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Todo List" />
                <div>
                    <Link to='/'>HOME</Link>
                    <Link to='/delete'>Deleted</Link>
                </div>
                <TodoContainer />
                <Switch>
                    <Route></Route>
                </Switch>
            </div>
        );
    }
}

export default App;