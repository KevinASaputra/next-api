import React from 'react'

interface SkillsCardProps {
  name: string
  icon: JSX.Element
}

export const SkillsCard = ({ name, icon }: SkillsCardProps) => {
  return (
    <div className="px-2">
      <div className="flex bg-white space-x-2 px-4 py-2 rounded-full drop-shadow-lg">
        <div className="h-6 w-6">{icon}</div>
        <div className="text-black whitespace-nowrap">{name}</div>
      </div>
    </div>
  )
}