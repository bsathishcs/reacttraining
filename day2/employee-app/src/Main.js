import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import DepartmentList from "./components/DepartmentList";
import EmployeeList from "./components/EmployeeList";
import Logout from "./Logout";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/department" component={DepartmentList} />
          <Route path="/employee" component={EmployeeList} />
          <Route path="/logout" component={Logout} />
          <Route
            path="*"
            render={() => {
              return <h2>404 - Page not found</h2>;
            }}
          />
        </Switch>
      </div>
    );
  }
}
