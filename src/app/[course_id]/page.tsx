"use client"

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Link from 'next/link'


import Image from 'next/image'
import DisplayVideo from '@/components/DisplayVideo'
import Videos from '@/components/Videos'
import { useEffect, useState } from 'react'
import PDFs_links from '@/components/PDFs_Links'

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

// const data = {
//   videos: [
//     {

//       video_title: 'Mathematics 1 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Mathematics 2 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Mathematics 3 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Mathematics 4 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Mathematics 5 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Mathematics 6 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//     {
//       video_title: 'Bigilee',
//       video_iframe: 'https://www.youtube.com/embed/rtd_VveAEaI?si=RZYuV4gnQB2MbSZx',
//     },
//     {
//       video_title: 'Mathematics 8 youtube video',
//       video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
//     },
//   ],


// }

// let pdfs = {
//   pdfs: [
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
//     {
//       title: 'Module 4',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 5',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 6',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 7',
//       link: 'https://www.google.com'
//     },
//     {
//       title: 'Module 8',
//       link: 'https://www.google.com'
//     },

//   ]

// }



async function getCourseDetails(course_id: string) {
  const res = await fetch('/api/fetchData')
  const data = await res.json()
  // return data where course_id = course_id
  console.log("data is ", data)
  let course_details = data.filter((course: any) => course.course_code == course_id)
  // console.log("The course details are",course_details[0])
  return course_details[0]
}

type courseData = {
  videos: {
    video_title: string,
    video_iframe: string
  }[],
  pdfs: {
    title: string,
    link: string
  }[]

}



export default function Home({ params }: { params: { course_id: string } }) {
  // console.log(params.course_id)
  const [courseData, setCourseData] = useState({})
  const [selectedVideo, setSelectedVideo] = useState(undefined)

  useEffect(() => {

    getCourseDetails(params.course_id).then((data: any) => {
      if (data === undefined || data === null) {
        console.log("No data found");
      } else {
        setCourseData(data)
        setSelectedVideo(data.videos[0])
        
      }
    });
  }, [params.course_id]); // Dependency array
  
  
  let selectedVideoNew
  const handleVideoClick = (video: any) => {
    // setSelectedVideo(video)
    selectedVideoNew = video
  }
  
  
  const data = courseData.videos
  const pdfs = courseData.pdfs
  if (data != undefined || pdfs != undefined) {
    console.log("The course data is:", courseData)
    console.log("Selected Video:", courseData.videos[0])
    // handleVideoClick(courseData.videos[0])
    selectedVideoNew = courseData.videos[0]

    




    return (
      <>
        <Navbar />
        <div className='overflow-hidden bg-black text-foreground '>
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-3xl bg-gradient-to-r items-center justify-center from-blue-900 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Mathematics Club VITC CMS</h1>
          <div className="flex items-center justify-center ">
            <div className="container self-center pb-2 ml-20">

              <DisplayVideo data={selectedVideoNew} />
            </div>


            <div className="container self-center ml-20">

              <Videos data={data} handleVideoClick={handleVideoClick} />
            </div>
          </div>

          <div className="flex flex-col  mb-2">
            <div className='container'>
              Download PDFs
            </div>
            <div className="container">

              <PDFs_links data={pdfs} />
            </div>
          </div>





          <Footer />





        </div>
      </>
    )
  }
  else {
    return (
      <div>Loading</div>
    )
  }
}