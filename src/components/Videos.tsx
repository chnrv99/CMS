import Link from 'next/link'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'



export default function Videos(props: any) {
    let data = props.data
    console.log("the data is", data)
    let handleVideoClick = props.handleVideoClick
    return (

        <ScrollArea className="flex h-72 w-80 rounded-md border">

            <div className="container">
                {data.videos.map((data: any, index: any) => (

                    <div key={index} className='flex py-4'>
                        {index + 1}

                        <div onClick={() => handleVideoClick(data)} className="text-xl pl-2 underline cursor-pointer">
                            {data.video_title}
                        </div>
                        {/* <div onClick={() => handleVideoClick(data)} className='underline cursor-pointer'>Watch Video</div> */}
                    </div>

                ))}
            </div>
            <Separator className='my-2' />
        </ScrollArea>

    )
}