import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import content from '../../content/content'
import SectionWrapper from '../sectionElements/SectionWrapper'

function TeamNovoTemplate() {
  const team = Object.values(content.texts.team.members)
  return (
    <SectionArea>
      <SectionWrapper>
        <section className=" bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primaryLight font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block">
                {content.texts.team.miniTag}
              </span>
              <h2 className="text-3xl md:text-4xl font-mainFont font-medium text-foreground mb-4">
                {content.texts.team.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {team.map((member, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6">
                    <div className="absolute inset-0 bg-primaryLight/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-mainFont font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primaryLight font-secondFont font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default TeamNovoTemplate
