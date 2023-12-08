import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/courses";

import { NextResponse } from "next/server";



export async function POST(request: any, response: any) {
    const {course_code, video_title, video_iframe} = await request.json();
    await connectMongoDB();
    if (!video_title || !video_iframe) {
        return NextResponse.json({message:"Missing fields"}, {status: 400});
    }
    else {
    //    push the data into the pdfs array
        await Course.updateOne({course_code}, {$push: {videos: {video_title, video_iframe}}});

        return NextResponse.json({message:"Course created successfully"}, {status: 201});
    }
}