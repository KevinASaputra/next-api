import React, { ReactNode } from 'react'

interface ParagrafSection {
  children?: ReactNode
}

export const ParagrafSection = ({ children }: ParagrafSection) => {
  return (
    <div className='flex'>
      <p className='text-white text-sm md:text-base'>
        {children}
      </p>
    </div>
  )
}