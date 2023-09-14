'use client'
import React from 'react';
import styles from './page.module.css'
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) =>{
    const data = items[cat];
   
    if(data){
        return  data;
    } else{
        notFound();
    }
}
const Category = ({params}) => {
    const data = getData(params.category);
    console.log("data",data)
  console.log(params)
  return (
    <div className={styles.container} >
      <h1 className={styles.catTitle}>{params.category}</h1>
      {
        data?.map((item) => {
            return (
                <div className={styles.item} key={item.id}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                   {/* <Image fill="true" alt='' src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg" className={styles.img} /> */}
                   <Image 
                   fill="true" 
                   alt=''
                    src={item.image} 
                   className={styles.img} />
            
                </div>
            </div>
            )
        })
      }
        {/* <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
                <Image fill="true" alt='' src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg" className={styles.img} />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Desc</p>
                <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
                <Image fill="true" alt='' src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg" className={styles.img} />
            </div>
        </div> */}
    </div>
  )
}

export default Category