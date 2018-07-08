import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import MemoListBox from 'components/MemoList/MemoListBox'

class MemoListContainer extends Component {

  render() {
    return (
      <MemoListBox />
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
  }
}

export default MemoListContainer = connect(undefined, mapDispatchToProps)(MemoListContainer)