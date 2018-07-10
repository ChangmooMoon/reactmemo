import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import Header from 'components/common/Header'

class HeaderContainer extends Component {

  render() {
    return (
      <Header />
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
  }
}

export default HeaderContainer = connect(undefined, mapDispatchToProps)(HeaderContainer)