import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './App/Todos';
import Header from './App/layout/Header';
import About from './App/pages/About';
import AddTodo from './App/AddTodo';
//import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class App extends React.Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({todos: res.data}));
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })})
    }

    delTodo = (id) => {
        //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
        axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    }

    addTodo = (title) => {
        /*const newTodo = {
            id: uuid.v4(),
            title,
            completde: false
        }*/
        //this.setState({ todos: [...this.state.todos, newTodo] });
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos:
                [...this.state.todos, res.data]
            }))
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo} />
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <Todos 
                                        todos={this.state.todos} 
                                        markComplete={this.markComplete}
                                        delTodo={this.delTodo}
                                    / >
                                </ul>
                            </div>
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    };
}

export default App;