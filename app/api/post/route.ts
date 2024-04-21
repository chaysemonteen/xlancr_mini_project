import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
 
    const { title, content } = await req.json();
    const newPost = await prisma.blog.create({
      data: {
        title, content, 
      }
    })
    return NextResponse.json({newPost}, { status: 200})

  } catch(error) {
    return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
  }
}