import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
    static propTypes = {
        todos: PropTypes.object,
        toggleAction: PropTypes.func,
        deleteAction: PropTypes.func,
    };

    render() {
        const {todo, toggleAction, deleteAction} = this.props;
        const style = {
            textDecoration: todo.isComplete ? 'line-through' : 'none',
            color: todo.isComplete ? '#0F0' : '#000',
        };
        return (
            <li style={style}>
                <img style={{display: 'inline-block'}} src={todo.gif} alt={todo.text} />
                <br />
                {todo.text}
                {' '}
                <button onClick={toggleAction}>
                    {todo.isComplete ? 'undo' : 'done'}
                </button>
                {' '}
                <button onClick={deleteAction}>
                    delete
                </button>
            </li>
        );
    }
};

export default TodoItem
