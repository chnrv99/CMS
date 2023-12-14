import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]





type CardProps = React.ComponentProps<typeof Card>
let url = 'http://localhost:3000/'

export default function Courses({ className, ...props }: any) {
    console.log(props)
    return (
        <Card className={cn("w-auto h-auto bg-[#149F98] hover:border-pink-100 transition-colors", className)} {...props}>
            <CardHeader>
                <div className="flex justify-between">
                    <CardTitle className="flex text-black">{props.data.title}</CardTitle>


                </div>
            </CardHeader>
            <CardContent className="grid gap-4">

                <div>

                    <div

                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                        <div className="space-y-1">
                            <p className="text-xl text-black font-medium leading-none">
                                {props.data.course_code}
                            </p>

                        </div>
                    </div>

                    <div

                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                        <div className="space-y-1">

                            <p className="text-sm text-black ">
                                {props.data.course_description}
                            </p>
                        </div>
                    </div>



                </div>
            </CardContent>
            <CardFooter>
                <Link href={props.data.course_code}>
                    <Button className="w-full bg-pink-300">
                       Go to course
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
