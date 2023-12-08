

import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import { connectMongoDB } from '@/lib/mongodb'
import Course from '@/models/courses'


import Image from 'next/image'

// const courses_year_1 = [
//   {
//     title: 'Mathematics 1',
//     course_code: 'MAT101',
//     course_description: 'This course is about the basics of mathematics -1',
//     link: 'http://localhost:3000/MAT101'
//   },
//   {
//     title: 'Mathematics 2',
//     course_code: 'MAT102',
//     course_description: 'This course is about the basics of mathematics -2',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 3',
//     course_code: 'MAT103',
//     course_description: 'This course is about the basics of mathematics-3',
//     link: 'https://www.google.com'
//   },
// ]

// const courses_year_2 = [
//   {
//     title: 'Mathematics 4',
//     course_code: 'MAT104',
//     course_description: 'This course is about the basics of mathematics-4',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 5',
//     course_code: 'MAT105',
//     course_description: 'This course is about the basics of mathematics-5',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 6',
//     course_code: 'MAT106',
//     course_description: 'This course is about the basics of mathematic-6',
//     link: 'https://www.google.com'
//   },
// ]

// const courses_year_3 = [
//   {
//     title: 'Mathematics 7',
//     course_code: 'MAT107',
//     course_description: 'This course is about the basics of mathematics-7',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 8',
//     course_code: 'MAT108',
//     course_description: 'This course is about the basics of mathematics-8',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 9',
//     course_code: 'MAT109',
//     course_description: 'This course is about the basics of mathematics-9',
//     link: 'https://www.google.com'
//   },
// ]

// const courses_year_4 = [
//   {
//     title: 'Mathematics 10',
//     course_code: 'MAT110',
//     course_description: 'This course is about the basics of mathematics-10',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 11',
//     course_code: 'MAT111',
//     course_description: 'This course is about the basics of mathematics-11',
//     link: 'https://www.google.com'
//   },
//   {
//     title: 'Mathematics 12',
//     course_code: 'MAT112',
//     course_description: 'This course is about the basics of mathematics-12',
//     link: 'https://www.google.com'
//   },
// ]

let url = process.env.url

async function getCourses() {
  const res = await fetch(url + '/api/fetchData', { cache: "no-store" })
  const data = await res.json()
  console.log("The data is:", data)
  // await connectMongoDB();
  // const data = await Course.find({});

  return data

}

export default async function Home() {
  let data = await getCourses()
  // so the data will have a course_code, which is of format BMAT101L, that 1 in 101 denotes that its a course_year_1, similarly for all
  let courses_year_1 = data.filter((course: any) => course.course_code[4] == 1)
  let courses_year_2 = data.filter((course: any) => course.course_code[4] == 2)
  let courses_year_3 = data.filter((course: any) => course.course_code[4] == 3)
  let courses_year_4 = data.filter((course: any) => course.course_code[4] == 4)



  return (
    <>
      <Navbar />
      <div className='flex flex-col   overflow-hidden bg-gradient-to-tl  bg-black text-yellow-100 '>
        <br />
        <br />
        <br />
        <br />

        <div className=' container'>
          <div className=''>

            <div className="flex justify-center">

              <h1 className="text-5xl bg-gradient-to-r items-center justify-center from-yellow-100 to-yellow-600 text-transparent bg-clip-text font-bold text-center border-b-2 border-yellow-200 mb-28 pb-4 mx-auto">
                Mathematics Club VITC CMS
              </h1>
            </div>

            <div className="">
              <h1 className="text-3xl font-bold">Year 1</h1>
              <br />
              <div className="container flex flex-wrap justify-between">
                {courses_year_1.map((data: any, index: any) => (
                  <Courses key={index} data={data} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="">
              <h1 className="text-3xl font-bold">Year 2</h1>
              <br />
              <div className="container flex flex-wrap justify-between">

                {courses_year_2.map((data: any, index: any) => (
                  <Courses key={index} data={data} />
                ))}

              </div>

            </div>
            <br />
            <br />
            <div className="">
              <h1 className="text-3xl font-bold">Year 3</h1>
              <br />
              <div className="container flex flex-wrap justify-between">

                {courses_year_3.map((data: any, index: any) => (
                  <Courses key={index} data={data} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="">
              <h1 className="text-3xl font-bold">Year 4</h1>
              <br />
              <div className="container flex flex-wrap">

                {courses_year_4.map((data: any, index: any) => (
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