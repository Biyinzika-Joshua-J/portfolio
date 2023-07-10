import React from "react";
import ContactImage from '../public/assests/contact2.png'
import Image from "next/image";
const ContactForm = () => {
  return (
    <div>
      <div className="text-center w-full">
        <div className="">
          
        </div>
      </div>
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Reach Me Here
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send me an <a href="mailto:joshuabiyinzika22@gmail.com"><span className="underline">email</span></a>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">
          <Image src={ContactImage} alt="contact infographic"/>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Joshua"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="joshua@soar.com"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Type your message here"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-[#116D6E] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-[#321E1E] transition ease-in duration-300 active:scale-50">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
