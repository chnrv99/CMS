import Link from 'next/link'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'



export default function Videos(props: any) {
    let data = props.data
    console.log("the data is", data)
    let handleVideoClick = props.handleVideoClick
    return (

        <ScrollArea className="h-72 w-48 rounded-md border">

            <div className="container">
                {data.videos.map((data: any, index: any) => (

                    <div key={index}>

                        <div className="text-xl">
                            {data.video_title}
                        </div>
                        <div onClick={() => handleVideoClick(data)} className='underline'>Watch Video</div>
                    </div>

                ))}
            </div>
            <Separator className='my-2' />
        </ScrollArea>

    )
}