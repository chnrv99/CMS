import React from 'react'

import { GitHubLogoIcon, TwitterLogoIcon, InstagramLogoIcon, DiscordLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'



export default function Footer() {
    return (
        <div className='border-t-2 border-pink-200'>
            <br />
            <div className="flex border-spacing-1 bg-blend-color-dodge font-light align-middle justify-center">
                <footer className=" text-white pt-2">
                    <div className="flex justify-center items-center">


                        <a href="#"><LinkedInLogoIcon width={25} height={25} className='mx-2' /></a>
                        <a href="#"><GitHubLogoIcon width={25} height={25} className='mx-2' /></a>
                        <a href="#"><TwitterLogoIcon width={25} height={25} className='mx-2' /></a>
                        <a href="#"><InstagramLogoIcon width={25} height={25} className='mx-2 mr-4' /></a>
                        {/* <a href="https://lnk.bio/go?d=https%3A%2F%2Fdiscord.gg%2FGR9Q4AZspB&hash=2388cac7ee446eabd8b19f2b87ae62ce&id=2766525&ext=-1341316&timezone=America%2FNew_York&type=1"><DiscordLogoIcon width={25} height={25} className='mx-2' /></a> */}


                        {/* <Image src={DiscordLogoIcon as string}/> */}
                    </div>
                </footer>


            </div >
            <br />
            <div className="container text-center text-slate-400 ">

                {"Made with ❤️ by Mathematics Club VITCC"}


            </div>
            <br />

        </div >
    )
}