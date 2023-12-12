import Link from 'next/link'
import React from 'react'



export default function DisplayVideo(props: any) {
    let data = props.data
    console.log("selected video title is:", data)
    return (
        <>
            <div className='flex'>
                <div className='relative' style={{ paddingBottom: '35.25%', paddingLeft: '40.25%', paddingRight: '20.25%' }}>
                    <h1 className="text-3xl font-bold text-pink-100">{data.video_title}</h1>
                    <br />

                    <iframe
                        className='absolute top-0 left-0 w-full h-full'
                        src={data.video_iframe}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </>
    )
}