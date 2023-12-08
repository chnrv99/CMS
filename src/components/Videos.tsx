import Link from 'next/link'
import React from 'react'
import svg from '../../public/Vector.svg'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'



export default function Videos(props: any) {
    let data = props.data
    console.log("the data is", data)
    let handleVideoClick = props.handleVideoClick
    return (

        <ScrollArea className="flex h-[40vh] w-[50vh] rounded-md border">

            <div className="">
                {data.map((data: any, index: any) => (

                    <div key={index} className='flex justify-between my-1 py-4 px-4 bg-slate-400 text-black'>
                        {index + 1}

                        <div onClick={() => handleVideoClick(data)} className="text-xl pl-10 underline cursor-pointer">
                            {data.video_title}
                        </div>
                        <div>
                            <Image src={svg} alt="Play Logo" className=''/>
                        </div>
                        {/* <div onClick={() => handleVideoClick(data)} className='underline cursor-pointer'>Watch Video</div> */}
                    </div>

                ))}
            </div>
            <Separator className='my-2' />
        </ScrollArea>

    )
}