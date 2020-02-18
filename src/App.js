import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
 
export default class App extends React.Component{
    render(){
        return (<div>{this.props.children}</div>)
    }

};