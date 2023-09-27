import React from 'react'
import styles from './styles.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our works</h1>
        {children}
    </div>
  )
}

export default Layout