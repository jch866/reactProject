import React from 'react';
import {Link } from 'react-router-dom';
export default class Main extends React.Component{
    render(){
        return (
                <div>
                     this is main page.
                     <br/>
                     <Link to='/main/test'> nested router -- test</Link>
                     <br/>
                     <Link to='/main/123'> nested router --- 123 </Link>
                      {this.props.children}
                </div>
                
        )
    }
}