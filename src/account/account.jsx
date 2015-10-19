'use strict';

import React from 'react';

import Menu from './../menu/menu.jsx'

export default class Account extends React.Component {
    render() {
        return (
            <div className="widget">
                Account
                <Menu />
            </div>
        )
    }
};