import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DocStore from '../store/DocStore';
import { Link } from 'react-router-dom';

export default @observer class DocList extends Component {
    store = new DocStore();

    constructor(props) {
        super(props);

        this.store.index();
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.store.models.map(model => <li key={model.id}><Link to="/">{model.title}</Link></li>)
                    }
                </ul>
            </>
        );
    }
}
