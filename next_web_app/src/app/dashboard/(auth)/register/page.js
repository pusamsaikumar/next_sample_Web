"use client"
import React, { useState } from 'react';
import styles from "./page.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");
  const router = useRouter();


  const handleSubmit = async(e)=>{
    e.preventDefault();
    // const name = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;
    
    //console.log("name : ",name , "email :  ",email , "password : ",password)  

      try{
          const res = await fetch('http://localhost:3000/api/auth/register',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              name, email, password
            })
          });
          // const result = await res.json();
          // console.log("res",result)
          // if(result.message === "Account has been created successfully!...."){
          //   setTimeout(()=>{
          //     toast.success(result.message);
              
          //   },[5000]);
          //   router.push("/dashboard/login?success=Account has been created");
         
          // }
         
          // toast.success("Account registered successfully...")
       
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
       
      }catch(err){
        setErr(err)
      }
  }
  return (
    <>
    <ToastContainer />
    <div className={styles.container}>
     
     <form className={styles.form} onSubmit={handleSubmit}>
         <input
           type='text'
           placeholder='username'
           className={styles.input}
           value={name}
           onChange={(e)=> setName(e.target.value)}
           required
         />
          <input
           type='email'
           placeholder='email'
           className={styles.input}
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           required
         />
          <input
           type='password'
           placeholder='password'
           className={styles.input}
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           required
         />
         <button className={styles.button}>Register</button>
     </form>
     {
       err && "Something went wrong !"
     }
     <Link href={"/dashboard/login"}>Login with Existing Account</Link>
</div>
    </>
    
  )
}

export default Register