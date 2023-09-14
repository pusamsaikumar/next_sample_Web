
"use client"
import React,{useState} from 'react';
import styles from "./page.module.css";
import { signIn, useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/Button';

const Login = () => {
  const  session = useSession();
  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = async (e) =>{
    e.preventDefault();
    signIn("credentials",{email,password})

  }
  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  if(session.status === "authenticated"){
    router?.push('/dashboard')
  }
  return (
       <>
    <ToastContainer />
    <div className={styles.container}>
     
     <form className={styles.form} onSubmit={handleSubmit}>
       
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
         <button className={styles.button}>Login</button>
     </form>
      <button onClick={()=> signIn("google")}>
          Login With Google
      </button>
     {/* <Link href={"/dashboard"}>Login with Existing Account</Link> */}
</div>
    </>
  )
}

export default Login