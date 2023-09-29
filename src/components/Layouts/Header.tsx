import { HomeIcon } from "../Elements"


export const Header = () => {
  return (
    <div className="flex items-center min-w-full h-14 bg-slate-600">
      <div className="flex w-full justify-between px-20">
        <h1 className="text-white text-xl">Header</h1>
        <HomeIcon />
      </div>
    </div>
  )
}