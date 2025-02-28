import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from 'next/link';
import Image from 'next/image';
export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
<Search placeholder=" Search user..."/>
<Link href='/Dashboard/Users/add'>
<button className={styles.addButton}> Add new</button>
</Link>
      </div>
      <table className={styles.table}>
<thead>
  <tr>
  <td>Name</td>
  <td>Email</td>
  <td>Created At</td>
  <td>Role</td>
  <td>Action</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <div className={styles.user}>
<Image
 src="/noavatar.png"
  alt="" 
  width="50" 
  height="50"
  className={styles.userImage}/>
      </div>
      John Doe
    </td>
    <td>
      John@gmail.com
    </td>
    <td>
      13.01.2002
    </td>
    <td>
      Admin
    </td>
    <td>
      Active
    </td>
    <td>
      <div className={styles.buttons}>

    
      <Link href="">
      <button className={`${styles.container} ${styles.view}`}>
        View
      </button>
      </Link>
      <Link href="">
      <button className={`${styles.container} ${styles.delete}`}>
        Delete
      </button>
      </Link>
      </div>
    </td>
  </tr>
</tbody>
      </table>
      <Pagination/>
    </div>
  )
}
