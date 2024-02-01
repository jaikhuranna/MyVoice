"use client"
import top from "../../public/tophalf.png"
import bg from "../../public/solutionbg.png"
import bottomhalf from '../../public/bottomhalf.png'
import thesolution from "../../public/oursolution.png"
import probgirl from "../../public/problemgirl.png"
import probboy from '../../public/problemboy.png'
import light from "../../public/goldorb.png"
import Image from "next/image"
export default function Solution(){
  return (
    <div className="flex flex-col ">
      <div className="flex mt-16 gap-16 text-3xl font-light">
       <a href="/" className="text-white text-lg z-20 hover:scale-110 transition-all ml-10"> HOME</a>
       <Image src={thesolution} className="absolute z-20 right-[40rem] " />
      </div>
      <Image src={top} className="absolute z-10" />
      <Image src={bg} className="h-screen absolute z-0"/>
        <h1 className="text-white font-Montserrat text-4xl z-30 w-[80rem] mt-28 ml-10 font-light " >
        We have developed a tool using TensorFlow and Machine Learning models to live transcribe sign language into written words, bridging communication gaps and enhancing accessibility. How cool is that? You can talk to your mute friends with no problem because our tool “MyVoice” is here for the rescue. Now don’t worry about being out of touch with your specially abled friends and you won’t need to bother them by making them type everything out because “MyVoice” does it for you. It gives out a live stream of interpreted information so you can keep up the conversation    
        </h1>
      <Image src={bottomhalf} className="absolute bottom-0 z-20"/>
      <Image src={probgirl} className="z-10 bottom-0 right-24 absolute" />
      <Image src={probboy} className="z-10 bottom-0 right-0 absolute" />
      <Image src={light} className="z-0 bottom-0 right-0 absolute" />
     
    </div>
  )
}