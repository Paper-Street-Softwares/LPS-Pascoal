import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ParceriaCard from "../cards/CardParceria";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function Parceria({ colorMode }) {
  const imgList = Object.values(content.texts.parceria.images);

  // Classes dinâmicas conforme colorMode
  let backgroundMode, text, textOpacity;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;
  }

  return (
    <SectionArea className={backgroundMode} data-theme={colorMode}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.parceria.miniTag}
          title={content.texts.parceria.title}
          subtitle={content.texts.parceria.subtitle}
          colorMode={colorMode}
        />

        <div className="flex flex-wrap gap-4 justify-center">
          {imgList.map((item, index) => (
            <MotionDivDownToUp className={`w-fit`}>
              <ParceriaCard
                key={index}
                role={item.role}
                img={item.img}
                alt={item.alt}
                text={item.description}
                name={item.name}
                colorMode={colorMode}
                textClass={text}
                textOpacityClass={textOpacity}
              />
            </MotionDivDownToUp>
          ))}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Parceria;
