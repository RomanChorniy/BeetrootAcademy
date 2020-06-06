import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    // componentWillMount() {
    //     console.log('===== componentWillMount =====', this.props, this.state);
    // }

    // componentDidMount() {
    //     console.log('===== componentDidMount =====', this.props, this.state);
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('===== componentWillReceiveProps =====', this.props, this.state);
    //     console.log('===== componentWillReceiveProps PROPS =====', nextProps, nextContext);
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('===== shouldComponentUpdate =====', this.props, this.state);
    //     console.log('===== shouldComponentUpdate PROPS =====', nextProps, nextState, nextContext);
    //     return true;
    // }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('===== componentWillUpdate =====', this.props, this.state);
    //     console.log('===== componentWillUpdate PROPS =====', nextProps, nextState, nextContext);
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('===== componentDidUpdate =====', this.props, this.state);
    //     console.log('===== componentDidUpdate PROPS =====', prevProps, prevState, snapshot);
    // }


    // componentWillUnmount() {
    //     console.log('===== componentWillUnmount =====', this.props, this.state);
    // }

    onInputChange(e) {
        this.setState({ todo: e.target.value });
    }

    onAddTodoBtnClick(e) {
        if ((e.key && e.key === 'Enter') || !e.key) {
            this.props.onBtnClicked(this.state.todo);
            this.setState({ todo: '' });
        }
    }

    render() {
        const { props, state } = this;
        return (
            <div className="add-todo-block">
                <input
                    type="text"
                    className="add-todo-input"
                    value={state.todo}
                    onChange={this.onInputChange.bind(this)}
                    onKeyPress={this.onAddTodoBtnClick.bind(this)} />
                <button
                    className="add-todo-btn"
                    onClick={this.onAddTodoBtnClick.bind(this)}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;