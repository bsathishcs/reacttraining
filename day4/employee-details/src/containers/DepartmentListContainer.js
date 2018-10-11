import { connect } from "react-redux";
import departmentAction from "./../actions/departmentAction";
import DepartmentList from "./../components/department/DepartmentList";

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

const DepartmentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentList);

export default DepartmentListContainer;
