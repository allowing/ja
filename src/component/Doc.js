import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import DocList from './DocList';
import Editor from './Editor';

export default @observer class Doc extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <div>
                    <DocList />
                    <Editor />
                </div>
                <FooterComponent />
            </>
        );
    }
}
