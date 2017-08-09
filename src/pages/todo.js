import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Common
import logo from '../images/logo.svg';
import Layout from './_layout';

// Modules
import {selectTodos} from '../modules/todo/selectors';
import * as todoActions from '../modules/todo';

import TodoItem from '../components/todo-item';
import InputText from '../components/input-text';

// Styles
import './styles/App.css';

class TodoPage extends Component {
    constructor() {
        super();
        this.state = {
            todoToAdd: '',
        };
    }

    static propTypes = {
        todos: PropTypes.array,
        addTodo: PropTypes.func,
        removeTodo: PropTypes.func,
        toggleTodo: PropTypes.func,
    };

    addTodo = () => {
        const {addTodo} = this.props;
        const {todoToAdd} = this.state;

        if (!todoToAdd) {
            return;
        }

        const todo = todoToAdd;

        this.setState({todoToAdd: ''}, () => addTodo(todo));
    };

    render() {
        const {todos, removeTodo, toggleTodo} = this.props;
        const {todoToAdd} = this.state;

        return (
            <Layout className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>It's the Todo+Gifs page!</h2>
                </div>
                <p className="App-intro">
                    This a Todo list, with GIFs for fun! It's mounted at
                </p>
                <pre>/todo</pre>
                <h2>Todos to do!</h2>
                <InputText value={todoToAdd} placeholder="Add a todo..." onEnter={this.addTodo}
                    onChange={e => this.setState({todoToAdd: e.target.value})} />
                <button onClick={this.addTodo}>Add todo</button>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={`todo-${index}`}
                                todo={todo}
                                deleteAction={() => removeTodo(todo.id)}
                                toggleAction={() => toggleTodo(todo.id)} />
                        );
                    })}
                </ul>
            </Layout>
        );
    }
}

const mapStateToProps = ({todo}) => {
    return {
        todos: selectTodos(todo),
    };
};

const mapDispatchToProps = {
    addTodo: todoActions.addTodo,
    removeTodo: todoActions.removeTodo,
    toggleTodo: todoActions.toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
