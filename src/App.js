import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import Layout from './components/Layout/'

export default class App extends Component {
  render() {
    return (
      <Provider key={module.hot ? Date.now() : configureStore} store={configureStore}>
        <Router>
          <Layout/>
        </Router>
      </Provider>
    )
  }
}
