import connectDb from "@/utlis/db";
import { NextResponse } from "next/server"
import Post from "../../../../../models/Post";

export const GET = async(req,{params}) =>{
    try{    
        const {id} = params;
        await connectDb();
        const post = await Post.findById(id);
        return NextResponse.json({message:"ok",data:post},{status:200})
    }catch(err){
        return NextResponse.json({message:"failed to fetch",err},{status:500})
    }
}

export const DELETE = async(req,{params})=>{
    try{
        const {id } =params;
        await connectDb();
          const deletePost = await Post.findByIdAndDelete(id)
        return NextResponse.json({
            message:'Post has been deleted successfully..',
            post:deletePost
        },
        {
            status:200
        }
        )
    }catch(err){
        return NextResponse.json({message:"failed to fetch",err},{status:500})
    }
}