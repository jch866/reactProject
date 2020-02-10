import React from 'react';
class Todolist extends React.Component{
    state = {
        list:['1','2','3','4']
    }
    addList = (val)=>{
        debugger;
        let arr =[...this.state.list] ;
        arr.unshift(val);
        this.setState({list:arr});
    }
    render() {
        return (
            <div>
            <h1>todolist demo</h1>
            <Add list={this.state.list} handler={this.addList}/>
            <List list={this.state.list}/>
            </div>
        )
    }
}
class Add extends  React.Component{
    addhandle=()=>{
        let val = this.refs.myadd.value;
        console.log(val);
        let handler = this.props.handler;
        handler(val);
        this.refs.myadd.value = ''
    }
    render(){
        let {list} = this.props;
        let len = list.length;
        return (
            <div>
            <input type="text" ref='myadd' />
            <button onClick={this.addhandle}>{`add:${len}`}</button>
            </div>
        )
}
}
class List extends React.Component{
    render(){
        let {list} = this.props;
        return (
            <ul>
                {
            list.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
            </ul>
        )
    }
}


export default Todolist;