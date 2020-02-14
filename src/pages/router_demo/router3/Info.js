import React,{Component} from 'react';
export default class Info extends Component{
    render(){
        return(
            <div>
                this is  info page;
                接收到的参数是：{this.props.match.params.value}
            </div>
        )
    }
}