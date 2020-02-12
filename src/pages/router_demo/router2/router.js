import React from 'react';
import {HashRouter as Router,Route } from 'react-router-dom';
import Main from './../router1/Main';
import About from './../router1/About';
import Topic from './../router1/Topic';
import Home from './home'
export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    <Route exact={true} path ='/' component ={Main}></Route>
                    <Route path ='/about' component ={About}></Route>
                    <Route path ='/topic' component ={Topic}></Route>
                </Home>
            </Router>
        )
    }
}