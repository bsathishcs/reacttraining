import axios from "axios";
export default function departmentAction(url) {
  return function(dispatch) {
    dispatch({ type: "IS_FETCHING" });

    axios
      .get(url)
      .then(resp => {
        dispatch({ type: "FETCH_ALL_DEPT_SUCCESS", departments: resp.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ALL_DEPT_ERROR", error: error });
      });
  };
}
