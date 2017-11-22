import React from 'react'
import styles from './styles/NavTabs.css'
import NavTabItem from './NavTabItem'

const NavTabs = ({tabs}) => (
<ul className={styles.nav}>
  {tabs.map((elem, index) => {
    let exact = true
    let to = ''

    if (index > 0){
      exact = false
      to = elem.id
    }
    return (
    <NavTabItem
      key={elem.id}
      exact={exact}
      to={to}
      title={elem.title}
    />)
  })}
</ul>)

export default NavTabs