import Image from "next/image"
import foto from "../../assets/profile.jpg"
import { IconArrowUpRight, IconCheckCircle } from "antasena-icons"
import centang from "../../assets/centang.png"
import { About } from "./About"




export const Content = () => {
  return (
    <>
      <div className="mx-auto items-center mt-10">
        <div className="flex">
          <div className=" mr-8 ms-8 w-16 h-16 rounded-full bg-slate-500 relative overflow-hidden">
            <Image src={foto} objectFit="cover" layout="" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 ">
              <h1 className="text-white text-xl font-semibold">Kevin A. Saputra</h1>
              <Image src={centang} layout="" alt="" className="w-5 h-5" />
            </div>
            <p className="text-white max-w-sm leading-4 underline hover:no-underline duration-200"> <a href="https://www.instagram.com/kvnn.exe/" target="_blank">@kvnn.exe</a></p>
            <div className="flex gap-5 text-sm mt-3">
              <a href="#" className="flex items-center text-slate-500 gap-2">Github
                <IconArrowUpRight className="w-4 h-4 text-black" /> </a>
              <a href="#" className="flex items-center text-blue-600 gap-2">Twitter
                <IconArrowUpRight className="w-4 h-4 text-black" /></a>
            </div>
          </div>
        </div>
        <div className=" mx-auto mt-10 ms-10 ">
          <About />
        </div>
      </div>
    </>
  )
}