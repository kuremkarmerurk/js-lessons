import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(props){
  let period = ["rest_block", "Отдых"];
  if(props.time > 45){
      period = ["rest_block", "Отдых"];
    } else {
      period = ["work_block", "Время работать над собой!!!"];
    }  

  return(
    <div className={period[0]}> {period[1]} </div>
  ) 
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1> Текущее время {this.state.date.toLocaleTimeString()} </h1>
      </div>
    )
  }
}

export default Clock;
