"use client"
import React, { useContext, useState } from 'react';
import styles from './darkmodetoggle.module.css';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkmodeToggle = () => {

    const {toggle,mode } = useContext(ThemeContext)
  //  let mode = "light";
  return (
    <div className={styles.container} onClick={toggle} >
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball}
            style={ mode === "light" ? {left:"2px"} : {right:"2px"}}
        ></div>
    </div>
  )
}

export default DarkmodeToggle;

{/* <div className={styles.icon}>🌙</div> */}
    //   <div className={styles.icon}>🔆</div>