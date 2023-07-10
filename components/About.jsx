import React from "react";
import Image from "next/image";
import AboutImage1 from "../public/assests/joshua-cartoon.jpg";
import AboutImage2 from "../public/assests/joshua-cartoon-2.png";
import AboutImage3 from "../public/assests/josh.jpg";

const About = () => {
  return (
    <div className="bg-[#ecf0f3]" id="about">
      <div className="w-[80%]  py-8 mx-auto">
        <div className="">
        <h1 className="text-[#4E3636] font-extrabold text-2xl">About</h1>
            <h2 className="text-3xl font-bold">Who I Am</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="col-span-2">
            <p className="leading-6 py-2">
            I am a student pursuing BSc in Computer Science at Goldsmith University of London, where I am gaining a strong foundation in software development. In 2020, amidst the pandemic, I ventured into coding and discovered my passion for frontend engineering. With expertise in React.js and JavaScript, I specialize in crafting captivating and user-centric web interfaces. 
            </p>
            <p className="leading-6 py-2">
            Alongside my studies, I indulge in my love for chess, which hones my strategic thinking and problem-solving skills. Committed to constant growth, I strive to stay updated with the latest technologies and trends. As a frontend engineer, I am driven to create meaningful and impactful digital experiences.
            </p>
          </div>
          <div className="lg:grid-cols-1/3 md:grid-cols-2/3 sm:grid-cols-3/3">
            <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image src={AboutImage3} className="rounded-xl" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
