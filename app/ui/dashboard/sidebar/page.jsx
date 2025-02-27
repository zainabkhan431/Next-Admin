import React from 'react'
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
export default function Sidebar() {

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/Dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/Dashboard/Users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/Dashboard/Products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
     <ul className={styles.list}>
      <img src='/noavatar.png' alt='' width='50' height='50' className={styles.userImage}/>
      <div className={styles.userDetail}>
        <span className={styles.username}> John Doe</span>
        <span className={styles.userTitle}> Administrator</span>
      </div>
        {menuItems.map((cat) => (
          <li className={styles.list} key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              // <MenuL item={item} key={item.title} />
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout/>
        Logout
      </button>
    </div>
  )
}
