import Link from 'next/link'
import React from 'react'



export default function Videos(props: any) {
    let data = props.data
    console.log("the data is",data)
    let handleVideoClick = props.handleVideoClick
    return (
        <div className="container">
            {data.videos.map((data: any, index: any) => (

                <div key={index}>

                    <div className="text-xl">
                        {data.video_title}
                    </div>
                    <div onClick={()=> handleVideoClick(data)} className='underline'>Watch Video</div>
                </div>

            ))}
        </div>
    )
}