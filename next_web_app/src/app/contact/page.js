import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

export const metadata = {
  title:"Contact page information",
  description:"This is contact page"
}

const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Let's keep in Touch</h1>
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <Image  src="/contact.png" fill = {true} alt='' className={styles.img} />
            </div>
            <form className={styles.form}>
                <input type='text' placeholder='name' className={styles.input} />
                <input type='text' placeholder='email' className={styles.input} />
                <textarea type="text" placeholder='message' className={styles.textarea} />
                <Button url="#" text="Send" />
            </form>
        </div>
    </div>
  )
}

export default Contact