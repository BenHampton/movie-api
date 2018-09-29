import React, {Component} from 'react';
import './css/header.css'

export default class Header extends Component{
    render(){
        return(
            <div>
                <div className={'header-text'}>
                Welcome To Movie Database API
                </div>
            </div>
        );
    }
}