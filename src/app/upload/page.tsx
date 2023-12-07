

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Link from 'next/link'


import Image from 'next/image'
import { UploadForm } from '@/components/Forms'

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

            <h1 className="text-3xl bg-gradient-to-r items-center justify-center from-blue-900 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Mathematics Club VITC CMS</h1>

            <h1 className="text-3xl">Upload Materials</h1>

            

          </div>

          <UploadForm />

        </div>
        <Footer />





      </div>
    </>
  )
}