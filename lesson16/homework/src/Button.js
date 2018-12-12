import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.Pinker = this.Pinker.bind(this);
    }

    Pinker() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#f1b4f5";
    }

    render(){
        return (
            <button onClick={this.Pinker} className="clicker"> Изменить дизайн </button>
        )
    }
}

export default Button;