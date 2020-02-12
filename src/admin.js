import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Row , Col} from 'antd';
import './css/main.less'

// show all the props of  ReactRouterDom;
 const ReactRouterDom = require('react-router-dom');
 console.log(ReactRouterDom)

export default class Admin extends React.Component{
    render(){
        return (
            <Row className="wrapper">
                <Col span={3} className='nav-left'>left</Col>
                <Col span={21} className='nav-right'>
                   <Header />
                   <Row className='nav-right-content'>
                       container
                   </Row>
                   <Footer />
                </Col>
            </Row>
        )
    }
}