
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {

  return (
    <div className={styles.container}>
        <div>
        @ 2023 saikumar, All rights reserved.
      
        </div>
        <div className={styles.imgContainer}>
         <Image src={"/1.png"} width={15} height={15} alt='sai kumar facebook' className={styles.icon} />
         <Image src={"/2.png"} width={15} height={15} alt='sai kumar instagram' className={styles.icon} />
         <Image src={"/3.png"} width={15} height={15} alt='sai kumar twitter' className={styles.icon} />
         <Image src={"/4.png"} width={15} height={15} alt='sai kumar youtube'className={styles.icon} />
        </div>
    </div>
  )
}

export default Footer;