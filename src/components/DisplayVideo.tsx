import Link from 'next/link'
import React from 'react'



export default function DisplayVideo(props: any) {
    let data = props.data
    console.log("selected video title is:", data.video_title)
    return (
        <>

            <div className=' container'>
                <div className=''>

                    <h1 className="text-3xl bg-gradient-to-r items-center justify-center from-blue-900 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Mathematics Club VITC CMS</h1>

                    <h1 className="text-3xl">{data.video_title}</h1>

                    <iframe width="560" height="315" src={data.video_iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>



            </div>

        </>
    )
}