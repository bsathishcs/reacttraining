import { connect } from "react-redux";
import departmentAction from "./../actions/departmentAction";
import DisplayDepartment from "./../components/department/DisplayDepartment";

function mapStateToProps(state) {
  return {
    departments: state.departments,
    error: state.error,
    isFetching: state.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDepartments: url => {
      dispatch(departmentAction(url));
    }
  };
}

const DisplayDepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayDepartment);

export default DisplayDepartmentContainer;
