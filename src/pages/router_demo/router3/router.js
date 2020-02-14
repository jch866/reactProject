import React from 'react';
import {HashRouter as Router,Route ,Switch } from 'react-router-dom';
import Main from './Main';
import About from './../router1/About';
import Info from './Info';
import Topic from './../router1/Topic';
import NoMatch from './NoMatch';
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
                    <Switch>
                        <Route path ='/main'render={()=>
                            <Main>
                                <Route path ='/main/:value' component ={Info}></Route> 
                            </Main>
                            }>   
                        </Route>
                        <Route path ='/about' component ={About}></Route>
                        <Route path ='/topic' component ={Topic}></Route>
                        <Route  component ={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}