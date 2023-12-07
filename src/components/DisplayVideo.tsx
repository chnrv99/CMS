import Link from 'next/link'
import React from 'react'



export default function DisplayVideo(props: any) {
    let data = props.data
    console.log("selected video title is:", data.video_title)
    return (
        <>

            <div className=' container'>
                <div className=''>

                    

                    <h1 className="text-3xl">{data.video_title}</h1>

                    <iframe width="560" height="315" src={data.video_iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>



            </div>

        </>
    )
}