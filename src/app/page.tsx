

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'


import Image from 'next/image'

const courses_year_1 = [
  {
    title: 'Mathematics 1',
    course_code: 'MAT101',
    course_description: 'This course is about the basics of mathematics -1',
    link: 'http://localhost:3000/MAT101'
  },
  {
    title: 'Mathematics 2',
    course_code: 'MAT102',
    course_description: 'This course is about the basics of mathematics -2',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 3',
    course_code: 'MAT103',
    course_description: 'This course is about the basics of mathematics-3',
    link: 'https://www.google.com'
  },
]

const courses_year_2 = [
  {
    title: 'Mathematics 4',
    course_code: 'MAT104',
    course_description: 'This course is about the basics of mathematics-4',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 5',
    course_code: 'MAT105',
    course_description: 'This course is about the basics of mathematics-5',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 6',
    course_code: 'MAT106',
    course_description: 'This course is about the basics of mathematic-6',
    link: 'https://www.google.com'
  },
]

const courses_year_3 = [
  {
    title: 'Mathematics 7',
    course_code: 'MAT107',
    course_description: 'This course is about the basics of mathematics-7',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 8',
    course_code: 'MAT108',
    course_description: 'This course is about the basics of mathematics-8',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 9',
    course_code: 'MAT109',
    course_description: 'This course is about the basics of mathematics-9',
    link: 'https://www.google.com'
  },
]

const courses_year_4 = [
  {
    title: 'Mathematics 10',
    course_code: 'MAT110',
    course_description: 'This course is about the basics of mathematics-10',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 11',
    course_code: 'MAT111',
    course_description: 'This course is about the basics of mathematics-11',
    link: 'https://www.google.com'
  },
  {
    title: 'Mathematics 12',
    course_code: 'MAT112',
    course_description: 'This course is about the basics of mathematics-12',
    link: 'https://www.google.com'
  },
]

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
                {courses_year_1.map((data, index) => (
                  <Courses key={index} data={data} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 2</h1>
              <div className="container flex">

                {courses_year_2.map((data, index) => (
                  <Courses key={index} data={data} />
                ))}

              </div>

            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 3</h1>
              <div className="container flex">

                {courses_year_3.map((data, index) => (
                  <Courses key={index} data={data} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <h1 className="text-xl">Year 4</h1>
              <div className="container flex">

                {courses_year_4.map((data, index) => (
                  <Courses key={index} data={data} />
                ))}

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