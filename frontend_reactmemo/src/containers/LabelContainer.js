import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import * as label from 'store/modules/label'
import LabelList from 'components/Label/LabelList'


class LabelContainer extends Component {

  fetchLabels = async () => {
    const labels = await axios.get('/labels').then(
      res => {
        console.log(res.data)
        return res.data
      }
    )
  }
  componentDidMount() {
    this.fetchLabels()
  }
  render() {
    return (
      <LabelList />
    );
  }
}

let mapStateToProps = state => {
  return {
    chosenLabel: state.label.chosenLabel
  }
}
let mapDispatchToProps = dispatch => {
  return {
    label: bindActionCreators(label,dispatch)
  }
}

export default LabelContainer = connect(mapStateToProps, mapDispatchToProps)(LabelContainer)