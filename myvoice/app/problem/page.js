"use client"
import top from "../../public/tophalf.png"
import bg from "../../public/bgwood.png"
import bottomhalf from '../../public/bottomhalf.png'
import theproblem from "../../public/theproblem.png"
import probgirl from "../../public/problemgirl.png"
import probboy from '../../public/problemboy.png'
import light from "../../public/theproblight.png"
import Image from "next/image"
export default function Problem(){
  return (
    <div className="flex flex-col ">
      <div className="flex mt-16 gap-16 text-3xl font-light">
       <a href="/" className="text-white text-lg z-20 hover:scale-110 transition-all ml-10"> HOME</a>
       <Image src={theproblem} className="absolute z-20 right-[40rem] " />
      </div>
      <Image src={top} className="absolute z-10" />
      <Image src={bg} className="h-screen absolute z-0"/>
        <h1 className="text-white text-5xl z-30 w-[80rem] mt-40 ml-10 font-light font-Montserrat">
        What if leading video call services like Zoom, Google Meet and Discord had a feature to live transcribe the sign language used by mute people? Wouldn’t it be so helpful? Thats what we thought after getting to know about the hardships faced by our mute friends who have a problem speaking.    
        </h1>
      <Image src={bottomhalf} className="absolute bottom-0 z-20"/>
      <Image src={probgirl} className="z-10 bottom-0 right-24 absolute" />
      <Image src={probboy} className="z-10 bottom-0 right-0 absolute" />
      <Image src={light} className="z-0 bottom-0 right-0 absolute" />
     
    </div>
  )
}