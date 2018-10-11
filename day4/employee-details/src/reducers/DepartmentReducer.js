function DepartmentReducer(
  prevState = {
    isFetching: true,
    departments: [],
    error: ""
  },
  action
) {
  let newState;

  switch (action.type) {
    case "IS_FETCHING":
      newState = {
        ...prevState,
        isFetching: true,
        departments: [],
        error: ""
      };
      break;
    case "FETCH_ALL_DEPT_SUCCESS":
      newState = {
        ...prevState,
        isFetching: false,
        departments: action.departments,
        error: ""
      };
      break;
    case "FETCH_ALL_DEPT_ERROR":
      newState = {
        ...prevState,
        isFetching: false,
        departments: [],
        error: action.error
      };
      break;
    default:
      newState = {
        ...prevState
      };
      break;
  }

  return newState;
}

export default DepartmentReducer;
