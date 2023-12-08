import mongoose, { Schema, models } from "mongoose";

const courseSchema = new Schema(
  {
    course_code: {
      type: String,
      required: true,
    },
    course_title: {
      type: String,
      required: true,
    },
    // videos is an array, inside that we have video_title and video_iframe
    videos: [
      {
        video_title: {
          type: String,
          required: true,
        },
        video_iframe: {
          type: String,
          required: true,
        }
      }
    ],
    // pdfs is an array, inside that we have title and link
    pdfs: [
      {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        }
      }
    ],
  },

  { timestamps: true },



);

const Course = models.User || mongoose.model("Course", courseSchema);
export default Course;