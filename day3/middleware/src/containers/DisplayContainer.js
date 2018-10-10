import { connect } from "react-redux";
import Display from "../Display";

function mapStateToProps(state) {
  return {
    isFetching: state.user.isFetching,
    userDetails: state.user.userDetails,
    error: state.user.error
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
