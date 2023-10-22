import React from "react"
import Marquee from "react-fast-marquee"

interface MarqueeElementProps {
  direction?: "left" | "right"
  children: React.ReactNode
}

export const MarqueeElement = ({ direction, children = 'left' }: MarqueeElementProps) => {
  return (
    <Marquee direction={direction} speed={25} className="py-3">
      {children}
    </Marquee>
  )
}