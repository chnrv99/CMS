import Link from 'next/link'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'



export default function PDFs_links(props: any) {
    let data = props.data
    console.log("the data is", data)
    let handleVideoClick = props.handleVideoClick
    return (

        <ScrollArea className="flex h-[40vh] w-[50vh] rounded-md border m-4">

            <div className="container">
                {data.pdfs.map((data: any, index: any) => (

                    <div key={index} className='flex py-4'>
                        {index + 1}

                        <Link href={data.link} className="text-xl pl-2 underline cursor-pointer">
                            {data.title}
                        </Link>
                        {/* <div onClick={() => handleVideoClick(data)} className='underline cursor-pointer'>Watch Video</div> */}
                    </div>

                ))}
            </div>
            <Separator className='my-2' />
        </ScrollArea>

    )
}