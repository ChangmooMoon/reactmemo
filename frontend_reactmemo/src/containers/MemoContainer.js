import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import MemoBox from 'components/Memo/MemoBox'

class MemoContainer extends Component {

  render() {
    return (
      <MemoBox />
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
  }
}

export default MemoContainer = connect(undefined, mapDispatchToProps)(MemoContainer)