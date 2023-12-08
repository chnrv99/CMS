

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Link from 'next/link'


import Image from 'next/image'
import  UploadCourse from '@/components/CourseForm'
import UploadPDF from '@/components/PDForm'
import UploadVideo from '@/components/VideoForm'

const data = {
  video_title: 'Mathematics 1 youtube video',
  video_iframe: 'https://www.youtube.com/embed/CnUe0CeRwSc?si=tzJojoj3RoRrPig-',
  module_pdfs: [
    {
      title: 'Module 1',
      link: 'https://www.google.com'
    },
    {
      title: 'Module 2',
      link: 'https://www.google.com'
    },
    {
      title: 'Module 3',
      link: 'https://www.google.com'
    },

  ]
}



export default function Home() {
  

  return (
    <>
      <Navbar />
      <div className='flex flex-col   overflow-hidden bg-gradient-to-tl  bg-black text-foreground '>
        <br />
        <br />
        <br />
        <br />

        <div className=' container'>
          <div className=''>

            <h1 className="text-3xl bg-gradient-to-r items-center justify-center from-yellow-100 to-yellow-400 text-transparent bg-clip-text font-bold  text-center border-b-2 border-yellow-200 mb-28 pb-4">Mathematics Club VITC CMS</h1>

            <h1 className="text-5xl font-bold text-yellow-200">Upload Materials</h1>

            

          </div>

          <br />
          <br />
          <h1 className="text-3xl font-bold text-yellow-200 ">Upload Course</h1>
          <UploadCourse />
          <br />
          <br />
          <h1 className="text-3xl font-bold text-yellow-200">Upload PDF</h1>
          <UploadPDF />
          <br />
          <br />
          <h1 className="text-3xl font-bold text-yellow-200">Upload Video</h1>
          <UploadVideo />
          <br />
          <br />


        </div>
        <Footer />





      </div>
    </>
  )
}