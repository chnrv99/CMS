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
  course_code: z
    .string()
    .min(2, {
      message: "Code must be at least 2 characters.",
    })
    .max(30, {
      message: "Code must not be longer than 30 characters.",
    }),
    video_title: z
    .string()
    .min(2, {
      message: "Title of Video must be at least 2 characters.",
    })
    .max(30, {
      message: "Title of Video must not be longer than 30 characters.",
    }),
    video_iframe: z
    .string()
    .min(2, {
      message: "Link of Video must be at least 2 characters.",
    })
    .max(100, {
      message: "Link must Video be longer than 100 characters.",
    }),
  
})

type ProfileFormValues = z.infer<typeof profileFormSchema>



export default function UploadVideo() {
  const form = useForm<ProfileFormValues>()

  

  async function onSubmitVideo(data: ProfileFormValues) {
    console.log(JSON.stringify(data, null, 2))
    await fetch('/api/uploadVideo', {
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
      <form onSubmit={form.handleSubmit(onSubmitVideo)} className="space-y-8">
        <FormField
          control={form.control}
          name="course_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Code</FormLabel>
              <FormControl>
                <Input placeholder="Code" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Course Code of the course you want to upload Videos for.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="video_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title of the Video</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                Enter the Title of the Video.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="video_iframe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IFrame of the Video</FormLabel>
              <FormControl>
                <Input placeholder="Link" {...field} />
              </FormControl>
              <FormDescription>
                Enter the link of the Video.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Add Video</Button>
      </form>
    </Form>
  )
}