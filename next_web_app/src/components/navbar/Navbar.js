"use client"
import Link from 'next/link'
import React from 'react';
import styles from "./navbar.module.css";
import DarkmodeToggle from '../darkmodetoggle/DarkmodeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const session = useSession();
    const links = [
        {
            id:1,
            url:"/",
            title:"Home"
        },
        {
            id:2,
            url:"/portpolio",
            title:"Portfolio"
        },
       
        {
            id:3,
            url:"/blog",
            title:"Blog"
        },
        {
            id:4,
            url:"/about",
            title:"About"
        },
        {
            id:5,
            url:"/contact",
            title:"Contact"
        },
        {
            id:6,
            url:'/dashboard',
            title:"Dashboard"
        }

    ]
  return (
    <div className={styles.container}>
        <Link href={"/"} className={styles.logo}> Saikumar</Link>
        <div className={styles.links}>
            <DarkmodeToggle />
            {
                links.map((link) =>{
                    return <Link key={link.id} href={link.url} className={styles.link} >{link.title}</Link>
                })
            }
           {
            session.status === "authenticated"
             && (
            <button className={styles.logout} onClick={
                ()=>  signOut()
             }>Logout</button>
             )
           }
        </div>
    </div>
  )
}

export default Navbar