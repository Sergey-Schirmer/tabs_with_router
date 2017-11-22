import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { tabsActions } from '../../actions/actions'
import DummyTable from '../../components/DummyTable/index'

class TabsContainer extends Component {
  _error(tabsObj){
    return (
    !tabsObj) ? {
      title: '404',
      order: ''
    }
    : tabsObj
  }

  getTab(){
    const {history, TabsReducer} = this.props
    const path = history.location.pathname
    const pathname = (elem) => elem.id === path.slice(1)

    if(path === "/"){
      return TabsReducer[0]
    }
    return this._error(TabsReducer.find(pathname))
  }

  render() {
    let tabsObj = this.getTab()
    return (<DummyTable title={tabsObj.title} order={tabsObj.order}/>)
  }
}

const mapStateToProps = ({TabsReducer}) => ({TabsReducer})
const mapDispatchToProps = (dispatch) => bindActionCreators(tabsActions, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabsContainer))