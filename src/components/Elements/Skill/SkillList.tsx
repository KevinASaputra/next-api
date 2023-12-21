import { SkillsCard } from "@/components/Layouts/SkillsCard"
import { MarqueeElement, SectionHeading, SectionSubHeading } from "@/common/components/elements/modules"

import { STACKS } from "@/common/Constant/stack"

export const SkillList = () => {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5)
  return (
    <section className="space-y-1 pt-16">
      <SectionHeading title="Skills" className="text-white -ms-2" />
      <SectionSubHeading>
        <p className="text-neutral-400 text-sm">My Coding SKill</p>
      </SectionSubHeading>

      <div>
        <div className="flex flex-col space-y-1 overflow-x-hidden">
          {Array.from({ length: 2 }, (_, index) => {
            const slider = [...stacksInArray].sort(() => Math.random() - 0.5)
            return (
              <MarqueeElement key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                {slider.map(([name, icon], index) => (
                  <SkillsCard key={index} name={name} icon={icon} />
                ))}
              </MarqueeElement>
            )
          })}
        </div>
      </div>
    </section>
  )
}