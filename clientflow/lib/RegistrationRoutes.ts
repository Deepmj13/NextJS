import { NextResponse } from "next/server";
import User from "./User";
import { connectDB } from "./db";
import { cache } from "react";

export async function POST(req:Request) {
    try{

        const {name,email,password} = await req.json();
        
        if(!name || !email || !password){
            return NextResponse.json(
                    {message:"all fields are required"},{status:400}
                )
        }
        await connectDB();
        const exists = await User.findOne({email});
        if(exists){
            return NextResponse.json(
                {message:"User already exists"},{status:400}
            );
        }
        await User.create({name,email,password});
        return NextResponse.json(
            {message:"user created"},{status:400}
        );
    }catch(error){
        return NextResponse.json({
            message:"Registration Failed"
        },{status:500})
    }
}