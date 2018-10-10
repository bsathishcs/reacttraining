import { connect } from "react-redux";
import Display from "../Display";

function MapStateToProps(state) {
  return {
    val: state.count
  };
}

const DisplayContainer = connect(MapStateToProps)(Display);
export default DisplayContainer;
