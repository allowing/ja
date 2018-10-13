import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoStore from '../store/TodoStore';

export default @observer class Todo extends Component {
    store = new TodoStore();

    constructor(props) {
        super(props);

        this.store.index();
    }

    add = () => {
        this.store.add({
            id: Math.random(),
            title: Math.random(),
        });
    };

    delete = (model) => {
        this.store.delete(model);
    };

    render() {
        return (
            <>
                <ul>
                    {this.store.models.map((model) => <li key={model.id} onClick={() => this.delete(model)}>{model.title}</li>)}
                </ul>
                <button onClick={this.add}>添加</button>
            </>
        );
    }
}
