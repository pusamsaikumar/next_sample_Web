import connectDb from "@/utlis/db"
import Post from "../../../../models/Post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { NextResponse } = require("next/server")



 export const GET = async (req,res) =>{
   try{
        const url = new URL(req.url);
        console.log("url",url)
        const username = url.searchParams.get("username");
        console.log("username",username)
        await connectDb();
        const posts = await Post.find(username && {username});
      //  return new NextResponse(JSON.stringify(posts),{status:500})
       return NextResponse.json({message:"ok",posts:posts},{status:200})
   }catch(err){
        return new NextResponse("Failed to fetching data",{status:500})
   }
}

export const POST = async (req,res)=>{
     const body = await req.json();
     const newPost = new Post(body);
     try{ 

          const postData = await newPost.save();
      //    return new NextResponse("Post has been created",{status:201})
      return NextResponse.json({message:"Post has been created successfully.",post:postData},{status:201})

     }catch(err){
          return NextResponse.json("Database Error",{status:500})
     }
}
