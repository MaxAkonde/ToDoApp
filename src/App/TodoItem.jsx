import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyleCompleted = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li className="list-group-item bg-lightd-flex justify-content-between align-items-center" style={this.getStyleCompleted()}>
                <input className="form-check-input" type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                {title}
                <button 
                    style={btnStyle} 
                    className="btn btn-outline-danger btn-sm"
                    onClick={this.props.delTodo.bind(this, id)}
                >
                    X
                </button>   
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    float: 'right',
    borderRadius: '50%',
    padding: '5px 10px'
}

export default TodoItem