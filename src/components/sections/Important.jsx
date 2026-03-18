import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import CardsImportants from '../cards/CardsImportants'
import content from '../../content/content'
import ButtonReflexo from '../../components/interactives/ButtonReflexo'
import MotionDivDownUp from '../animation/MotionDivDownToUp'
import { defaultButtonThemes } from '../../context/UseContextArchive'

function Important({ colorMode }) {
  const listCards = Object.values(content.texts.important.cards)
  let backgroundMode, text, textOpacity, textDestaque

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-transparent'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      break
    case 'dark':
      backgroundMode = 'bg-transparent'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      break
    case 'defaultDark':
      backgroundMode = 'bg-transparent'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      break
    case 'defaultLight':
      backgroundMode = 'bg-transparent'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
  }

  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.important.miniTag}
          title={content.texts.important.title}
          subtitle={content.texts.important.subtitle}
          colorMode={colorMode}
        />

        <div className="grid gap-12 tablet1:grid-cols-2">
          {listCards.map((item) => (
            <CardsImportants
              title={item.title}
              paragraph={item.paragraph}
              colorMode={colorMode}
            />
          ))}
        </div>

        <MotionDivDownUp>
          <p
            className={`flex justify-center font-secondFont text-center w-full my-12 ${textOpacity}`}
          >
            {content.texts.important.fraseObs}
          </p>
        </MotionDivDownUp>

        <MotionDivDownUp>
          <ButtonReflexo
            label={content.texts.important.ctaButtonText}
            icon={content.texts.svgs.wpp}
            link={content.texts.links.ctaWhatsapp}
            className={`clickevent`}
            bgClass={
              colorMode === 'defaultDark' || colorMode === 'light'
                ? defaultButtonThemes.light
                : defaultButtonThemes.dark
            }
          />
        </MotionDivDownUp>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Important
