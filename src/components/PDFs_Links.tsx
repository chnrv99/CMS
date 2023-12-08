import Link from 'next/link'
import React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'



export default function PDFs_links(props: any) {
    let data = props.data
    console.log("the data is", data)
    let handleVideoClick = props.handleVideoClick
    return (

        <ScrollArea className="flex h-[40vh] w-[50vh] rounded-md border">

            <div className="">
                {data.map((data: any, index: any) => (

                    <div key={index} className='flex my-1 py-4 px-4 bg-slate-400 text-black'>
                        

                        <Link href={data.link} className=" mx-2 text-xl cursor-pointer">
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