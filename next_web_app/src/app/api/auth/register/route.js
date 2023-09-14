import connectDb from "@/utlis/db";
import bcrypt from "bcryptjs"
import User from "../../../../../models/User";
import { NextResponse } from "next/server";


export const POST = async(req)=>{
    const {name,email,password} = await req.json();
    await connectDb();
    const hashedPassword = await bcrypt.hash(password,5);
    const newUser = new User({
        name,
        email,
        password: hashedPassword.toString()
    });
    try{    
            
        const newRegister = await newUser.save();
        return NextResponse.json({
            message:"Account has been created successfully!....",
            data:newRegister
        },
        {status : 201}
        )

    }catch(err){
        return NextResponse.json({
            message:"Account registraion has been failed",
            err
        },
        {status : 500}
        )
    }
}