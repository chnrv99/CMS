"use client"

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Link from 'next/link'


import Image from 'next/image'
import DisplayVideo from '@/components/DisplayVideo'
import Videos from '@/components/Videos'
import { useState } from 'react'

// const data = {
//   video_title: 'Mathematics 1 youtube video',
//   video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//   module_pdfs: [
//     {
//       title: 'Module 1',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 2',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 3',
//       link: 'https://www.google.com'
//     },

//   ]
// }

const data = {
  videos: [
    {

      video_title: 'Mathematics 1 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Mathematics 2 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Mathematics 3 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Mathematics 4 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Mathematics 5 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Mathematics 6 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
    {
      video_title: 'Bigilee',
      video_iframe: 'https://www.youtube.com/embed/rtd_VveAEaI?si=RZYuV4gnQB2MbSZx',
    },
    {
      video_title: 'Mathematics 8 youtube video',
      video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
    },
  ],


}



export default function Home({ params }: { params: { course_id: string } }) {
  console.log(params.course_id)

  const [selectedVideo, setSelectedVideo] = useState(data.videos[0])
  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
  }


  return (
    <>
      <Navbar />
      <div className='flex flex-col   overflow-hidden bg-gradient-to-tl  bg-black text-foreground '>
        <br />
        <br />
        <br />
        <br />
        <>
          <DisplayVideo data={selectedVideo} />
        </>
        <>
          <Videos data={data} handleVideoClick={handleVideoClick}  />
        </>

        

        <Footer />





      </div>
    </>
  )
}