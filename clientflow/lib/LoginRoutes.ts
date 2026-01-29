import { NextResponse } from "next/server";
import User from "./User";
import { connectDB } from "./db";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcryptjs";


export async function(req:Request){
    const {email,password} = await req.json();

    if(!email ||!password){
        return NextResponse.json(
            {message:"all fields required"},{status:400}
        )
    }

    await connectDB()
    
    const exists = User.find
}