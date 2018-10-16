import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as monaco from 'monaco-editor';

export default @observer class Editor extends Component {
    editor = null;

    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.editor = monaco.editor.create(this.myRef.current, {
            value: '(请用`markdown`语法编写内容)',
            language: 'markdown',
            theme: 'vs-dark',
        });

        this.editor.onKeyDown((e) => {
            e.preventDefault();
        });
    }

    render() {
        return (
            <div className="Editor" ref={this.myRef}>

            </div>
        );
    }
}
