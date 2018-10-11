import React from "react";
import { Link } from "react-router-dom";

class DisplayDepartment extends React.Component {
  componentDidMount() {
    this.props.getDepartments("http://localhost:3004/departments");
  }

  render() {
    const { isFetching, departments, error } = this.props;

    let departmentItmes = "";

    departmentItmes = departments.map(dept => {
      return (
        <tr key={dept.id}>
          <td>{dept.id}</td>
          <td>{dept.name}</td>
          <td>
            <input name={dept.name} type="radio" />
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1>Departments</h1>
        <form action="">
          <div>
            <Link to="/department/create">
              <input type="button" value="Create" />
            </Link>
            <input type="button" value="Update" />
            <input type="button" value="Delete" />
          </div>
          <div>
            <table id="tab">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>

              <tbody>{departmentItmes}</tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default DisplayDepartment;
