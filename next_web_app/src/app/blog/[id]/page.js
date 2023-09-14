// "use client"
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import {notFound} from "next/navigation";

const getSinglePost = async(id) =>{
  //const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{cache:"no-store"});
  const res =  await fetch(`http://localhost:3000/api/posts/${id}`,{cache:"no-store"});
  if(!res.ok){
    return notFound()
  }
  const result = await res.json();
  return result.data;
}

export const generateMetadata = async ({params}) =>{
    const post = await getSinglePost(params.id);
    return {
      title:post.title,
      description:post.desc
    }

}

const BlogPost =async ({params}) => {
  // console.log("params",params)
  const data =  await getSinglePost(params.id);
  console.log("data",data)
  return (
    <div className={styles.container}>
        <div className={styles.top}>
              <div className={styles.info}>
                  <h1 className={styles.title}>
                    {data.title}
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
                  </h1>
                  <p className={styles.desc}>
                    {/* {data.body} */}
                    {data.desc}
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque arcu eget velit convallis, 
                  et dignissim dolor vulputate. */}
                  </p>
                  <div className={styles.author}>
                    <Image 
                    // src={"https://images.pexels.com/photos/17657304/pexels-photo-17657304/free-photo-of-a-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    src={data.image}
                    className={styles.avatar} 
                    width={40} 
                    height={40} 
                     />
                      <span className={styles.username}>{data.username}</span>
                  </div>
              </div> 
              <div className={styles.imgContainer}>
                <Image
                //  src="https://images.pexels.com/photos/13633929/pexels-photo-13633929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src={data.image}
                  fill="true" alt='' className={styles.img}/>
              </div> 
        </div>
        <div className={styles.content}>
            <p className={styles.text}>
                  {data.content}
            </p>
        </div>
    </div>
  )
}

export default BlogPost