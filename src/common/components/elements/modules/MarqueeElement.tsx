import React from "react"
import Marquee from "react-fast-marquee"

interface MarqueeElementProps {
  direction?: "left" | "right" | 'up'
  pauseOnHover?: boolean
  children: React.ReactNode
}

export const MarqueeElement = ({ direction, children = 'left', pauseOnHover = true }: MarqueeElementProps) => {
  return (
    <Marquee direction={direction} pauseOnHover={pauseOnHover} speed={25} className="py-3">
      {children}
    </Marquee>
  )
}