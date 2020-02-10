import React from 'react';
import Child from './child';
import './index.less'
// eslint-disable-next-line
import ReactDom from 'react-dom';
export default class Lify extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     count:0
        // }
    }
    state = {
        count:0
    }
    handlerclick(){
        this.setState({
            count:this.state.count-1
        })
    }
    handleradd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        let mystyle = {
            'background':'yellow'
        };
        return (<div style={mystyle} className='border2'>
            <Child name = {`my name is ${this.state.count}`}/>
            <h1>{this.state.count}</h1>
            <button onClick={this.handlerclick.bind(this)}>click</button>
            <button onClick={this.handleradd}>add</button>
        </div>)
    }
}