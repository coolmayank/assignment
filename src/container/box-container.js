import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../reducer/reducer";
import Box from "../components/Box";

class Boxcon extends React.Component {
  render() {
    return (
      <div>
        <Box
          handleclick={this.props.loadcategory}
          color={this.props.color}
        ></Box>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actioncreators
)(Boxcon);
