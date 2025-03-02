import { NextResponse } from 'next/server'
import pool from '@/app/utils/dbConnection';


export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        console.log("Name: " ,name)
        console.log("Email: " ,email)
        console.log("Password: " ,password)

        return NextResponse.json({message:"User register"} , { status:201})
    } catch(error) {

        return NextResponse.json({ message: "An error occured while registering the user." }, { status: 500 })

    }
}