import { connect } from "react-redux";

import Form from "../Form";

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    incHandler: () => {
      dispatch({ type: "INC" });
    }
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
