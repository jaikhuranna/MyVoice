"use client"
import top from "../public/tophalf.png"
import bg from "../public/bgwood.png"
import mute from "../public/mute.png"
import text from "../public/text.png"
import girlleft from "../public/girlfarleft.png"
import boyleft from "../public/boyleft.png"
import lowerwhite from "../public/lowerwhite.png"
import girlright from "../public/girlright.png"
import bottomhalf from '../public/bottomhalf.png'
import boyright from "../public/boyright.png"
import Image from "next/image"
export default function Home(){
  return (
    <div className="flex flex-col  ">
      <div className="flex self-center mt-16 gap-16 text-3xl font-light">
       <a href="/problem" className="text-white z-20 hover:scale-110 transition-all"> THE PROBLEM</a>
       <a href="/solution" className="text-white z-20 hover:scale-110 transition-all"> OUR SOLUTION</a>
      </div>
      <Image src={top} className="absolute z-10" />
      <Image src={bg} className="h-screen absolute z-0"/>
      <Image src={mute} className=" z-10 mt-12 self-center w-[45rem] opacity-75" />
      <Image src={text} className="self-center absolute mt-96"/>
      <a href="/tool" className="absolute z-30 bottom-80 self-center font-Montserrat text-3xl border-2 rounded-2xl px-16 py-3 hover:scale-110 transition-all"> Get Started </a>
      <Image src={girlleft} className="absolute bottom-0 w-[25rem] z-20 " />
      <Image src={lowerwhite} className="absolute bottom-0 z-0" />
      <Image src={boyleft} className="absolute bottom-0 w-[31rem] left-52 z-10" />
      <Image src={girlright} className="absolute bottom-0 h-[28rem] right-36 z-20 " />
      <Image src={boyright} className="absolute bottom-0 right-0 z-10 h-[38rem]" />
      <Image src={bottomhalf} className="absolute bottom-0 z-20"/>
    </div>
  )
}