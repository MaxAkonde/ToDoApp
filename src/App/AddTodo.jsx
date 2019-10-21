import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                placeholder="Add Todo..."
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>   
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-block btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;