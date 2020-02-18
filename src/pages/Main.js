import React from "react";
import {HashRouter as Router, Route,Switch} from "react-router-dom";
import App from "./../App";
import Admin from "./../admin";
import Login from "./login/index";
import Detail from "./detail/index";
import Buttons from "./buttons/index";

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <App>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route
                path="/admin"
                render={() => (
                  <Admin>
                    <Route path="/Admin/ui" component={Buttons}></Route>
                  </Admin>
                )}
              ></Route>
              <Route path="/detail" component={Detail}></Route>
            </Switch>
          </App>
        </div>
      </Router>
    );
  }
}
