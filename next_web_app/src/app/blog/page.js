
import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const getData = async()=>{
    // static fetch data:
   // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

   // revalidating fetch data: every 10 second it will be fetching...
//    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//     next:{revalidate: 10}
//    })
// const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//     cache:"no-store"
//    })
const res = await fetch("http://localhost:3000/api/posts",{
    cache:"no-store"
   })
  if(!res.ok){
   throw new Error("failed to fetch data")
  
  }
   return await res.json();
}


const Blog = async() => {
    const data = await getData();
   console.log("data",data)
  return (
    <div className={styles.mainContainer}>
     {
        data?.posts?.map((item) => {
            return (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item.id} >
                <div className={styles.imgContainer}>
                    <Image
                    //  src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg"
                    src={item.image} 
                    alt=''
                     width={400}
                      height={250}
                      className={styles.img}
                     style={{width:"400px",height:"250px"}}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title} >{item.title}</h1>
                    <p className={styles.desc}>
                        {/* {item.body} */}
                        {item.desc}
                        </p>
                </div>
            </Link>
            )
        })
     }
      {/* <Link href="/blog/testId" className={styles.container} >
          <div className={styles.imgContainer}>
              <Image
               src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg"
                width={400}
                height={250}
                className={styles.image}
                alt=''
                style={{width:"400px",height:"250px"}}
              />
          </div>
          <div className={styles.content}>
              <h1 className={styles.title} >Test</h1>
              <p className={styles.desc}>Desc</p>
          </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} >
          <div className={styles.imgContainer}>
              <Image
               src="https://images.pexels.com/photos/17916414/pexels-photo-17916414/free-photo-of-tropical-beach-at-dusk.jpeg"
                width={400}
                height={250}
                className={styles.img}
                alt=''
                style={{width:"400px",height:"250px"}}
              />
          </div>
          <div className={styles.content}>
              <h1 className={styles.title} >Test</h1>
              <p className={styles.desc}>Desc</p>
          </div>
      </Link> */}
    </div>
  )
}

export default Blog;