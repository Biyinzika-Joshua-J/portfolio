'use client'

import React from 'react'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  return (
    <div className="h-[90vh] w-full scroll bg-[#ecf0f3] flex justify-center items-center text-center flex-col" id='home'>
        <h5 className="text-slate-500">Transforming ideas into captivating user interfaces</h5>
        <h1 className="text-3xl my-6 font-bold">Hi, I'm <span className="text-[#4E3636] font-extrabold">Joshua</span><br/> A Front-End Web Developer.</h1>
        <p className="text-slate-700 lg:w-[50%] md:w-[70%] sm:w-[90%] ">Experienced frontend developer with a deep understanding of React and Next.js, creating captivating web experiences that seamlessly blend design and functionality. Committed to delivering high-quality, user-centric solutions that make a difference</p>
        <div className="">
        <div className="flex items-center justify-center pt-4">
              <IconButton
                href="https://www.linkedin.com/in/biyinzika-joshua-j"
                target="__blank"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <LinkedInIcon className="text-[#4E3636]" />
                </div>
              </IconButton>

              <IconButton href="https://github.com/Biyinzika-Joshua-J" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <GitHubIcon className="text-[#4E3636]" />
                </div>
              </IconButton>

              <IconButton href="https://twitter.com/JoshJosephB" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <TwitterIcon className="text-[#4E3636]" />
                </div>
              </IconButton>
              <IconButton href="mailto:joshuabiyinzika22@gmail.com" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <EmailIcon className="text-[#4E3636]" />
                </div>
              </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Hero