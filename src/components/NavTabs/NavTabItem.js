import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'material-ui/Button'

const NavTabItem = ({exact, to, title}) =>(
  <li>
    <Button raised color="primary">
      <NavLink  to={'/'+to} exact={exact} activeStyle={{color: '#ff2aa1'}}>{title}</NavLink >
    </Button>
  </li>)

export default NavTabItem