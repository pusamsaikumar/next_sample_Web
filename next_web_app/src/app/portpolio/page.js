import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portpolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose A Gellery</h1>
      <div className={styles.items} >
          <Link href={"/portpolio/illustrations"} className={styles.item}>
              <span className={styles.selectTitle}>Illustrations</span>
          </Link>
          <Link href={"/portpolio/websites"} className={styles.item}>
              <span className={styles.selectTitle}>Websites</span>
          </Link>
          <Link href={"/portpolio/applications"} className={styles.item}>
              <span className={styles.selectTitle}>Applications</span>
          </Link>
          

      </div>
    </div>
  )
}

export default Portpolio