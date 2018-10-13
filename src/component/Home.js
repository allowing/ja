import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

export default @observer class Home extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <FooterComponent />
            </>
        );
    }
}
