import React from 'react'
import styles from "./search.module.css";
import { MdSearch } from 'react-icons/md';
export default function search({placeholder}) {
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type='text' className={styles.input}
        placeholder={placeholder}
       /> 
      
    </div>
  )
}
