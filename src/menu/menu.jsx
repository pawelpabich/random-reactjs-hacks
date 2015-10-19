'use strict';

import React from 'react';
import {Link} from 'react-router'

export default class Menu extends React.Component {
    render() {
        return (
            <ul className="widget">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/account`}>Account</Link></li>
            </ul>
        )
    }
};