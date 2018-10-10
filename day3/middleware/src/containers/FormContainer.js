import { connect } from "react-redux";
import Form from "../Form";
import userDetailsAction from "./../actions/userDetailsAction";

function mapDispatchToProps(dispatch) {
  return {
    getUserDetails: urlVal => {
      dispatch(userDetailsAction(urlVal));
    }
  };
}

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
