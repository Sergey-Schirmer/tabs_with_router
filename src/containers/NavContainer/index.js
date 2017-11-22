import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { tabsActions } from '../../actions/actions'
import NavTabs from "../../components/NavTabs";


class NavContainer extends Component {
  render() {
    const { TabsReducer } = this.props
    return (<NavTabs tabs={ TabsReducer }/>)
  }
}

 const mapStateToProps = ({TabsReducer}) => ({ TabsReducer })
 const mapDispatchToProps = (dispatch) => bindActionCreators(tabsActions, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))