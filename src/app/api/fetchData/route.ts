import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/courses";

import { NextResponse } from "next/server";
import { GetServerSidePropsContext } from 'next';


export async function GET(request: any, response: any) {
    await connectMongoDB();
    const data = await Course.find({});
    
    return NextResponse.json(data, {status: 200});
}