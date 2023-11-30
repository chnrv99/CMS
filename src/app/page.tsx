

import { Courses } from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'


import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Navbar />
      <div className='flex flex-col   overflow-hidden bg-gradient-to-tl  bg-black text-foreground '>
        <br />
        <br />
        <br />
        <br />

        <div className='flex container'>
          <div className=''>

            <h1 className="text-3xl bg-gradient-to-r items-center justify-center from-blue-900 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Mathematics Club VITC CMS</h1>

            <div className="container">
              <h1 className="text-xl">Year 1</h1>
              <div className="container flex">

                <Courses />
                <Courses />
                
                <Courses />
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 2</h1>
              <div className="container flex">

                <Courses />
                <Courses />
                <Courses />
          
              </div>

            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 3</h1>
              <div className="container flex">

                <Courses />
                <Courses />
               
                <Courses />
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 4</h1>
              <div className="container flex">

                <Courses />
                <Courses />
                <Courses />
              
              </div>
            </div>
            <br />
            <br />


          </div>

        </div>
        <Footer />





      </div>
    </>
  )
}