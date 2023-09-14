"use client"
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";
import useSWR from 'swr';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard  = () => {
  // for client side using useEffect:
//   const [data,setData] = useState([]);
//   const [err,setErr] = useState(false);
//   const [isLoading,setIsLoading] = useState(false);

// const getData = async ()=>{
// setIsLoading(true)
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"});
//   if(!res.ok){
//     setErr(true);
//   }
//   const data = await res.json();
//   setData(data);
//   setIsLoading(false)
//   setErr(false);
// }
// useEffect(()=>{
//   getData();
// },[])

const session = useSession();
console.log(session)

const router = useRouter();

// using useSWR for swr
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const {data, mutate,error,isLoading}  =   useSWR(
  // "https://jsonplaceholder.typicode.com/posts",
  `/api/posts?username=${session?.data?.user?.name}`,
  fetcher
  );
console.log(data)
if(session.status === "loading"){
  return <p>Loading....</p>
}

if(session.status === "unauthenticated"){
  return router?.push("/dashboard/login")
}

const handleSubmit = async(e)=>{
  const title = e.target[0].value;
  const desc = e.target[1].value;
  const image = e.target[2].value;
  const content = e.target[3].value;
  try {
        const res = await fetch('/api/posts',{
          method:'POST',
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({
            title,
            desc,
            image,
            content,
            username:session?.data?.user?.name
          })
        });
        mutate();
        const data = await res.json();
        console.log("res",data)  
        if(res.status === 201){
          toast.success(data.message);
          mutate();
          e.target.reset();
        }
      }catch(err){

  }
} 

const handleDelete = async(id)=>{
  try{  
     const res =  await fetch(`/api/posts/${id}`,{
        method:"DELETE"
      });
      const data = await res.json();
      console.log("data",data);
      if(res.status === 200){
        toast.error(data.message);
        mutate();
      }
    //  mutate();
    

  }catch(err){
    console.log(err)
  }
}
if(session.status === "authenticated"){

 
  
  return (
   <>
   <ToastContainer />
    <div className={styles.container}>
        <div className={styles.posts}> 
          {
           isLoading ? "loading" :  data?.posts?.map( (post) => {
       return <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                    <Image src={post.image}
                     alt='' 
                     width={200}
                     height={100}
                    //  fill={true} 
                     className={styles.img}
                     style={{width:"200px",height:"100px"}}
                     />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.delete}
                  onClick={()=> handleDelete(post._id)}
                >X</span>
              </div>
            })
          }
        </div>
        <form className={styles.new} onSubmit={handleSubmit} >
            <h1>Add New Post</h1>
            
            <input 
              type="text"
              placeholder='Title'
              className={styles.input}
            />
            <input 
              type="text"
              placeholder='Description'
              className={styles.input}
            />
             <input 
              type="text"
              placeholder='Image'
              className={styles.input}
            />
            <textarea
              placeholder='Content'
              cols={30}
              rows={10}
              className={styles.textarea}
            ></textarea>
            <button className={styles.button}>Send</button>
        </form>
     </div>
   </>
  )
}


}

export default Dashboard 