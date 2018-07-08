import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import LabelList from 'components/Label/LabelList'

class LabelContainer extends Component {

  render() {
    return (
      <LabelList />
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
  }
}

export default LabelContainer = connect(undefined, mapDispatchToProps)(LabelContainer)