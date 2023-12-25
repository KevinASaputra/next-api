import React, { ReactNode } from "react"

interface SectionSubHeadingProps {
  children?: ReactNode
}

export const SectionSubHeading = ({ children }: SectionSubHeadingProps) => {
  return (
    <div className="flex flex-col pb-8 lg:flex-row justify-between lg:items-center gap-2 text-neutral-500 dark:text-neutral-400">
      {children}
    </div>
  )
}