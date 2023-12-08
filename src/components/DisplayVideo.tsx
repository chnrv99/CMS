import Link from 'next/link'
import React from 'react'



export default function DisplayVideo(props: any) {
    let data = props.data
    console.log("selected video title is:", data)
    return (
        <>

            <div className='flex mx-auto container'>
                <div className=''>

                    

                    <h1 className="text-3xl font-bold text-yellow-100">{data.video_title}</h1>
                    <br />

                    <iframe width="800" height="500" src={data.video_iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>



            </div>

        </>
    )
}