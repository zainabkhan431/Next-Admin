import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from 'next/link';
import Image from 'next/image';
export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
<Search placeholder=" Search product..."/>
<Link href='/Dashboard/Products/add'>
<button className={styles.addButton}> Add new</button>
</Link>
      </div>
      <table className={styles.table}>
<thead>
  <tr>
  <td>Title</td>
  <td>Description</td>
  <td>Price</td>
  <td>Created At</td>
  <td>Stock</td>
  <td>Action</td>
  </tr>
</thead>
<tbody>
  <tr>
  <td>
                <div className={styles.product}>
                  <Image
                    src={ "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                Iphone
                </div>
              </td>
    <td>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </td>
    <td>
     $123
    </td>
    <td>
    Oct 29,2003
    </td>
    <td>
    34
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
