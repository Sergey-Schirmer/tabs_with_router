import React from 'react'
import NavContainer from '../../containers/NavContainer'
import Routers from '../../Routers'
import styles from './styles/Layout.css'

const Layout = () =>(
  <div className={styles.wrapp}>
    <NavContainer/>
    <Routers/>
  </div>)

export default Layout
