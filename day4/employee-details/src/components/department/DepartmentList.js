import React from "react";
import DisplayDepartment from "./DisplayDepartment";
import { Route, Switch } from "react-router-dom";
import CreateDepartment from "./CreateDepartment";
import DisplayDepartmentContainer from "./../../containers/DisplayDepartmentContainer";

class DepartmentList extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/department"
            exact
            component={DisplayDepartmentContainer}
          />
          <Route path="/department/create" component={CreateDepartment} />
        </Switch>
      </div>
    );
  }
}

export default DepartmentList;
