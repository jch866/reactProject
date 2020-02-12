import React from 'react';
import {HashRouter,Link,Switch,Route} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
 // show all the props of  ReactRouterDom;
 const ReactRouterDom = require('react-router-dom');
 console.log(ReactRouterDom)
export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <li>
                        <Link to ='/'> Home </Link>
                    </li>
                    <li>
                        <Link to ='/about'> About </Link>
                    </li>
                    <li>
                        <Link to ='/topic'> Topic </Link>
                    </li>
                </div>
                <hr></hr>
                <Switch>
                {/* exact={true} */}
                    <Route exact={true} path ='/' component ={Main}></Route>
                    <Route path ='/about' component ={About}></Route>
                    <Route path ='/topic' component ={Topic}></Route>
                </Switch>
                
            </HashRouter>
        )
    }
}