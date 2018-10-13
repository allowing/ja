import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <ul className="HeaderComponent-nav">
                    <li className="HeaderComponent-nav-item"><Link className="HeaderComponent-nav-item-a" to="/">首页</Link></li>
                    <li className="HeaderComponent-nav-item"><Link className="HeaderComponent-nav-item-a" to="/doc">教案</Link></li>
                    <li className="HeaderComponent-nav-item"><Link className="HeaderComponent-nav-item-a" to="/about">关于我们</Link></li>
                </ul>
            </header>
        );
    }
}
