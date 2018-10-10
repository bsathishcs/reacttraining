export default function userReducer(
  prevState = { fetching: false, userDetails: {}, error: "" },
  action
) {
  let newState;

  switch (action.type) {
    case "IS_FETCHING":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: {},
        error: ""
      };
      break;
    case "FETCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: false,
        userDetails: action.userDetails,
        error: ""
      };
      break;
    case "FETCH_FAILURE":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: {},
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
