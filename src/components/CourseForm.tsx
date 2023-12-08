"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const profileFormSchema = z.object({
  course_title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(40, {
      message: "Username must not be longer than 40 characters.",
    }),
  course_code: z
    .string()
    .min(5, {
      message: "Code must be at least 5 characters.",
    })
    .max(40, {
      message: "Code must not be longer than 40 characters.",
    }),

})

type ProfileFormValues = z.infer<typeof profileFormSchema>



export default function UploadCourse() {
  const form = useForm<ProfileFormValues>()



  async function onSubmitCourse(data: ProfileFormValues) {

    console.log(JSON.stringify(data))
    // we need to do a post request to /api/uploadCourse with course_code and course_title as body
    await fetch('/api/uploadCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);

      })
      .catch((error) => {
        console.error('Error:', error);

      });



  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitCourse)} className="space-y-8">
        <FormField
          control={form.control}
          name="course_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter Course Code" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Course Code for the course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Course Title" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Course Title for the course
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" onClick={() => onSubmitCourse}>Add Course</Button>
      </form>
    </Form >
  )
}