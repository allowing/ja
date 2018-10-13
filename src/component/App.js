import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Todo from './Todo';
import About from './About';

export default class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <div className="App">
                        <Link to="/">Home</Link>
                        <Link to="/todo">Todo</Link>
                        <Link to="/about">关于</Link>
                    </div>

                    <Route exact path="/" component={Home} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/about" component={About} />
                </>
            </Router>
        );
    }
}
