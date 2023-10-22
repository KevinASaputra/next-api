import { SKILLS } from "@/components/Constant/skill"
import { SkillsCard } from "@/components/Layouts/SkillsCard"
import Marquee from "react-fast-marquee"


export const SkillList = () => {

  return (
    <section className="space-y-1 pt-16">
      <div className="text-xl text-white">
        <h1>Skills</h1>
      </div>

      <div className="flex flex-col pt-8 py-2 space-y-5 overflow-x-hidden">
        <Marquee direction="right" className="space-x-3">
          <div className="flex space-x-3">
            {SKILLS.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" className="space-x-3">
          <div className="flex space-x-3">
            {SKILLS.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}