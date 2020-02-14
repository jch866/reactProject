import React from "react";
import { Link} from "react-router-dom";
const ReactRouterDom = require('react-router-dom');
 console.log(ReactRouterDom)
export default class Home extends React.Component {
  render() {
    return (
        <div>
          <li>
            <Link to="/main"> Home1 23</Link>
          </li>
          <li>
            <Link to="/about"> About1 </Link>
          </li>
          <li>
            <Link to="/topic"> Topic1 </Link>
          </li>
          <li>
            <Link to="/page1"> page1 </Link>
          </li>
          <li>
            <Link to="/page2"> page2 </Link>
          </li>
          <hr></hr>
       
          {this.props.children}
        </div>
    );
  }
}
