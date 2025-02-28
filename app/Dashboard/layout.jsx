import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/page'
import Navbar from '../ui/dashboard/navbar/page'
import Footer from '../ui/dashboard/footer/footer'

import styles from "../ui/dashboard/dashboard.module.css";
export default function layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
<Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
