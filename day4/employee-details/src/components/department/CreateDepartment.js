import React from "react";
import { axios } from "axios";

class CreateDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  render() {
    function submitHandler(dispatch) {
      axios
        .post("http://localhost:3004/departments", { name: "test" })
        .then(resp => {
          dispatch({ type: "FETCH_ALL_DEPT_SUCCESS", departments: resp.data });
        })
        .catch(error => {
          dispatch({ type: "FETCH_ALL_DEPT_ERROR", error: error });
        });
    }

    return (
      <div>
        <input type="text" />
        <br />
        <br />
        <input type="button" value="add" onClick={this.submitHandler} />
      </div>
    );
  }
}

export default CreateDepartment;
