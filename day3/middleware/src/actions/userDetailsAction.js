import axios from "axios";
export default function userDetailsAction(url) {
  return function(dispatch) {
    dispatch({ type: "IS_FETCHING" });

    axios
      .get(url)
      .then(resp => {
        dispatch({ type: "FETCH_SUCCESS", userDetails: resp.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_FAILURE", error: error });
      });
  };
}
