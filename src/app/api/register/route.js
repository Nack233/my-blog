import { NextResponse } from 'next/server'
import pool from '@/app/utils/dbConnection';


// export async function POST(req) {
//     try {
//         const { name, email, password } = await req.json();

//         console.log("Name: " ,name)
//         console.log("Email: " ,email)
//         console.log("Password: " ,password)

//         return NextResponse.json({message:"User register"} , { status:201})
//     } catch(error) {

//         return NextResponse.json({ message: "An error occured while registering the user." }, { status: 500 })

//     }
// }

export async function GET() {
    try {
      const client = await pool.connect();
      await client.query('SELECT 1'); // Simple query to test connection
      client.release();
      return NextResponse.json({ status: 'Database connection successful' }, { status: 200 });
    } catch (error) {
      console.error('Database connection error:', error);
      return NextResponse.json({ status: 'Database connection failed', error: error.message }, { status: 500 });
    }
  }