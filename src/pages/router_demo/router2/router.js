import React from 'react';
import {HashRouter as Router,Route } from 'react-router-dom';
import Main from './Main';
import About from './../router1/About';
import Topic from './../router1/Topic';
import Home from './home'
export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    {/* 两种render都可以 */}
                    {/* <Route path ='/main'render={()=>{
                        return (
                        <Main>
                            <Route path ='/main/a' component ={About}></Route> 
                         </Main>
                         )}}></Route> */}
                    <Route path ='/main'render={()=>
                        <Main>
                            <Route path ='/main/a' component ={About}></Route> 
                         </Main>
                         }>   
                     </Route>
                    <Route path ='/about' component ={About}></Route>
                    <Route path ='/topic' component ={Topic}></Route>
                </Home>
            </Router>
        )
    }
}