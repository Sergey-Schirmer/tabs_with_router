import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TabsContainer from './containers/TabsContainer'

const Routers = () => (
  <Switch>
    <Route exact path="/" component={ TabsContainer }/>
    <Route path="/:id" component={ TabsContainer }/>
  </Switch>
)

export default Routers

