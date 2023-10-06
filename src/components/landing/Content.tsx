import Image from "next/image"
import foto from "../../assets/profile.jpg"
import { IconArrowUpRight, IconCheckVerified2, } from "antasena-icons"
import centang from "../../assets/centang.png"
import { About } from "./About"




export const Content = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-7 py-12">
        <div className="mx-auto max-w-xl">
          <div className="flex">
            <div className=" mr-8 ms-5 w-20 h-20 flex-shrink-0 rounded-full bg-slate-500 relative overflow-hidden">
              <Image src={foto} objectFit="cover" layout="" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-white text-xl font-semibold">Kevin A. Saputra</h1>
                <Image src={centang} layout="" alt="" className="w-4 h-4" />
              </div>
              <p className="max-w-sm text-sm leading-4 text-neutral-500">Software Engineer - Typescript Enthusiast</p>
              <p className="text-white text-xs max-w-sm underline leading-4 hover:no-underline duration-200"><a href="https://www.instagram.com/kvnn.exe/" target="_blank">instagram.com/kvnn.exe</a></p>
            </div>
          </div>
          <div className="mx-auto mt-10 px-7">
            <div className="">
              <div className="grid gap-2">
                <p className="text-white text-xl font-semibold font-mono">About</p>
                <p className="text-neutral-500 leading-4 ms-2 font-light text-sm">Hi! I`m Kevin who is currently studying State Polytechnic of Malang.
                  I`m interested in software engineering and web development.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2 px-3">
              <a href="https://github.com/KevinASaputra/" target="_blank" className="flex items-center gap-1 font-medium underline text-zinc-500">Github <IconCheckVerified2 className="w-4 h-4 text-blue-500" /></a>
              <a href="https://www.linkedin.com/in/kevin-a-saputra-403389223/" target="_blank" className="flex items-center gap-1 font-medium underline text-blue-500">LinkedIn <IconCheckVerified2 className="w-4 h-4 text-blue-500" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}