import React from "react";
import { motion } from "framer-motion";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import ButtonReflexo from "../interactives/ButtonReflexo";
import ButtonAlert from "../interactives/ButtonAlert";
import { Phone } from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { ButtonsLps } from "../../context/UseContextArchive";
import { defaultButtonThemes } from "../../context/UseContextArchive";

function StepsNovoTemplate({ colorMode }) {
  const steps = Object.values(content.texts.steps.cards);
  const { showGlobalButtonsLps } = ButtonsLps();

  // Classes dinâmicas conforme colorMode
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      stepNumberBg = "bg-white";
      stepNumberText = "text-primaryDark";
      lineColor = "bg-primaryDark/20";
      textDestaque = "text-primaryDark";
      image = " border-[8px] border-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      stepNumberBg = "bg-dark";
      stepNumberText = "text-primaryLight";
      lineColor = "bg-primaryLight/20";
      textDestaque = "text-primaryLight";
      image = " border-[8px] border-borderImage";

      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      stepNumberBg = "bg-white";
      stepNumberText = "text-primaryDark";
      lineColor = "bg-primaryDark/20";
      textDestaque = "text-primaryDark";
      image = " border-[8px] border-white";

      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      stepNumberBg = "bg-white";
      stepNumberText = "text-primaryLight";
      lineColor = "bg-white/20";
      textDestaque = "text-primaryLight";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
  }

  return (
    <SectionArea className={backgroundMode} data-theme={colorMode}>
      <SectionWrapper>
        <div className="mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-2 desktop1:gap-16 items-center">
            {/* Imagem */}
            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 relative"
            >
              {/* <div
                  className={`absolute inset-0 ${
                    colorMode === 'dark'
                      ? 'bg-primaryLight/20'
                      : 'bg-primaryDark/20'
                  } rounded-[3rem] rotate-3 scale-100`}
                /> */}
              <MotionDivDownToUp>
                <div
                  className={`relative mt-6 desktop1:mt-0 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-100 ${image}`}
                >
                  {" "}
                  <img
                    src={content.texts.steps.img}
                    alt={content.texts.steps.alt}
                    className={`relative rounded-[2rem] shadow-xl w-full m-auto scale-105 hover:scale-100 transition-transform duration-700`}
                    width={621}
                    height={828}
                  />
                </div>
              </MotionDivDownToUp>

              {showGlobalButtonsLps && (
                <MotionDivDownToUp>
                  <div className="flex flex-col gap-4 pt-12 w-fit justify-center items-start mx-auto desktop1:hidden">
                    <ButtonReflexo
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                        </svg>
                      }
                      link={content.texts.links.ctaWhatsapp}
                      label={content.texts.steps.ctaButtonText}
                      bgClass={
                        colorMode === "defaultDark" || colorMode === "light"
                          ? defaultButtonThemes.light
                          : defaultButtonThemes.dark
                      }
                      className={`clickevent`}
                    />
                    <ButtonReflexo
                      id="ligar"
                      icon={<Phone width={20} />}
                      link={`tel:${content.texts.infos.phone}`}
                      label="Emergência? Ligue agora!"
                      colorMode={colorMode}
                      bgClass="bg-[#ff2c2c]"
                      className="text-white"
                    />
                  </div>
                </MotionDivDownToUp>
              )}
            </div>

            {/* Passos */}
            <div className="order-1 lg:order-2 space-y-12">
              <SectionHeaderNovo
                miniTitle={content.texts.steps.miniTag}
                title={content.texts.steps.FirstPart}
                destaque={content.texts.steps.Destaque}
                secondPart={content.texts.steps.SecondPart}
                subtitle={content.texts.steps.subtitle}
                colorMode={colorMode}
                type="article"
              />

              <div className="space-y-8 ">
                {steps.map((item, idx) => (
                  <MotionDivDownToUp>
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== steps.length - 1 && (
                        <div
                          className={`absolute left-[1.65rem] top-12 bottom-0 w-0.5 ${lineColor}`}
                        />
                      )}
                      <div
                        className={`w-14 h-14 rounded-full ${stepNumberBg} border-2 border-primary ${stepNumberText} flex items-center justify-center text-xl font-bold font-mainFont shrink-0 shadow-sm z-10`}
                      >
                        {item.stepNumber}
                      </div>
                      <div className="pt-2">
                        <h1
                          className={`text-xl font-bold mb-2 font-secondFont ${text}`}
                        >
                          {item.cardTitle}
                        </h1>
                        <p
                          className={`text-sm font-light font-secondFont ${textOpacity}`}
                        >
                          {item.cardDescription}
                        </p>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                ))}
              </div>

              {showGlobalButtonsLps && (
                <MotionDivDownToUp>
                  <div className="desktop1:flex flex-col gap-4 pt-4 w-fit justify-center items-start hidden">
                    <ButtonReflexo
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                        </svg>
                      }
                      link={content.texts.links.ctaWhatsapp}
                      label={content.texts.steps.ctaButtonText}
                      bgClass={
                        colorMode === "defaultDark" || colorMode === "light"
                          ? defaultButtonThemes.light
                          : defaultButtonThemes.dark
                      }
                      className={`clickevent`}
                    />
                    <ButtonReflexo
                      id="ligar"
                      icon={<Phone width={20} />}
                      link={`tel:${content.texts.infos.phone}`}
                      label="Emergência? Ligue agora!"
                      colorMode={colorMode}
                      bgClass="bg-[#ff2c2c]"
                      className="text-white"
                    />
                  </div>
                </MotionDivDownToUp>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default StepsNovoTemplate;
