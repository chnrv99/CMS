import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/courses";

import { NextResponse } from "next/server";
import { GetServerSidePropsContext } from 'next';


export async function POST(request: any, response: any) {
    const {course_code, title, link} = await request.json();
    if (!title || !link) {
        return NextResponse.json({message:"Missing fields"}, {status: 400});
    }
    else {
    //    push the data into the pdfs array
        await Course.updateOne({course_code}, {$push: {pdfs: {title, link}}});

        return NextResponse.json({message:"Course created successfully"}, {status: 201});
    }
}