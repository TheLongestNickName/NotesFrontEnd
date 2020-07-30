import React from "react";
import BtnLanguege from "./btn";
import { connect } from "react-redux";
import { toggleIsFetching } from "../../redux/homePage-reducer";

class BtnContainer extends React.Component {
  render() {
    return <BtnLanguege toggleIsFetching={this.props.toggleIsFetching} />;
  }
}

let mapStateToProps = (state) => {
  return { isFetching: state.homePage.isFetching };
};

export default connect(mapStateToProps, { toggleIsFetching })(BtnContainer);
