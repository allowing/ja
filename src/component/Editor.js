import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as monaco from 'monaco-editor';

export default @observer class Editor extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        monaco.editor.create(this.myRef.current, {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!");',
                '}'
            ].join('\n'),
            language: 'javascript',
        });
    }

    render() {
        return (
            <div className="Editor" ref={this.myRef}>

            </div>
        );
    }
}
