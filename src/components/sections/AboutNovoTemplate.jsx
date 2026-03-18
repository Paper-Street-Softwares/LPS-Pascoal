import { Phone } from "lucide-react";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import {
  ButtonsLps,
  defaultButtonThemes,
} from "../../context/UseContextArchive";
import { Button } from "../interactives/ButtonNovoTemplate";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

function AboutNovoTemplate({ ButtonModal, colorMode, benefits }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(content.texts.about.title);
    setVisible(true);
  };

  // Definindo classes conforme colorMode
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    buttonBg,
    textDestaque,
    image,
    textOpacityModal;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textOpacityModal = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-white/10";
      iconBg = "bg-primaryDark/10 text-primaryDark";
      buttonBg = "bg-primaryDark";
      image = " border-[8px] border-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textOpacityModal = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      cardBg = "bg-gray-800/20";
      iconBg = "bg-primaryLight/20 text-primaryLight";
      buttonBg = "bg-primaryLight";
      image = " border-[8px] border-borderImage";
      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textOpacityModal = "text-corOutrosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-white/10";
      iconBg = "bg-primaryDark/10 text-primaryDark";
      buttonBg = "bg-primaryDark";
      image = " border-[8px] border-white";
      break;
    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosBranca";
      textOpacityModal = "text-corOutrosPreto";
      textDestaque = "text-white";
      cardBg = "bg-white/10";
      iconBg = "bg-white text-primaryDark";
      buttonBg = "bg-primaryDark";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_60%)]";
  }

  const { showGlobalButtonsLps } = ButtonsLps();
  const listBenefitsAbout = Object.values(content.texts.about.benefits.cards);

  return (
    <SectionArea
      id="about"
      data-theme={colorMode}
      className={`${backgroundMode}`}
    >
      <SectionWrapper>
        <section className="w-full relative overflow-visible">
          <div className=" mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-0 desktop1:gap-16 items-center">
              {/* Conteúdo textual */}
              <div className="space-y-8">
                <div>
                  <SectionHeaderNovo
                    miniTitle={content.texts.about.miniTag}
                    title={content.texts.about.FirstPart}
                    destaque={content.texts.about.Destaque}
                    secondPart={content.texts.about.SecondPart}
                    subtitle={content.texts.about.subtitle}
                    type="article"
                    colorMode={colorMode}
                  />
                  <MotionDivDownToUp>
                    <p
                      className={`font-secondFont font-light text-sm tablet1:text-lg leading-relaxed mt-6 ${textOpacity}`}
                    >
                      {content.texts.about.paragraph}
                    </p>
                  </MotionDivDownToUp>

                  <MotionDivDownToUp>
                    {ButtonModal && (
                      <Button
                        onClick={onClick}
                        className={`bg-transparent mt-4 border-none shadow-primary/20 font-secondFont py-0 uppercase font-bold transition-all px-0 scale-100 hover:scale-95 duration-500 outline-none flex items-center gap-2 ${textDestaque}`}
                      >
                        {content.texts.about.buttonModalLabelAbout}
                        <ArrowRight width={24} height={24} />
                      </Button>
                    )}
                  </MotionDivDownToUp>
                </div>

                {/* Lista de benefícios */}
                <MotionDivDownToUp>
                  {benefits && (
                    <div className="space-y-4">
                      {listBenefitsAbout.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${iconBg} mt-1`}>
                            {item.icon}
                          </div>
                          <div>
                            <h1
                              className={`font-bold font-secondFont ${textDestaque}`}
                            >
                              {item.title}
                            </h1>
                            <p
                              className={`text-sm font-secondFont font-light ${textOpacity}`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </MotionDivDownToUp>

                {showGlobalButtonsLps && (
                  <MotionDivDownToUp>
                    <div className="desktop1:flex flex-col gap-4 pt-4 w-fit justify-center items-start m-auto desktop1:m-0 hidden">
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
                        label={content.texts.about.ctaButtonText}
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
                        className="text-white mx-auto desktop1:m-0"
                      />
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>

              {/* Imagem com destaque */}
              <MotionDivDownToUp
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative w-full mt-4 tablet1:mt-8 desktop1:mt-0 m-auto overflow-visible mb-10 desktop1:mb-0"
              >
                <div className="relative rounded-3xl shadow-2xl ring-1 ring-black/5">
                  {/* CLIP DA IMAGEM */}
                  <div
                    className={`relative rounded-3xl overflow-hidden  ${image}`}
                  >
                    <img
                      src={content.texts.about.imagem.img}
                      alt={content.texts.about.imagem.alt}
                      className="w-full scale-105 hover:scale-100 transition-transform duration-700 rounded-[1rem]"
                      width={621}
                      height={829}
                    />
                  </div>
                </div>
              </MotionDivDownToUp>

              {showGlobalButtonsLps && (
                <div className="flex flex-col gap-4 w-fit justify-center items-center mx-auto desktop1:hidden">
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
                    label={content.texts.about.ctaButtonText}
                    colorMode={colorMode}
                    className={`clickevent`}
                  />
                  <ButtonReflexo
                    id="ligar"
                    icon={<Phone width={20} />}
                    link={`tel:${content.texts.infos.phone}`}
                    label="Emergência? Ligue agora!"
                    colorMode={colorMode}
                    className="text-white"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Modal */}
          <Dialog
            contentClassName={`${
              colorMode === "dark" ? "bg-darkOpacity" : "bg-white"
            }`}
            headerClassName={`${
              colorMode === "dark" ? "bg-darkOpacity" : "bg-white"
            }`}
            className="font-secondFont p-0 rounded-md"
            closeIcon={
              <X
                size={20}
                className={colorMode === "dark" ? "text-white" : "text-black"}
              />
            }
            header={
              <span className={`font-secondFont px-4 ${text}`}>
                {content.texts.about.FirstPart} {content.texts.about.Destaque}{" "}
                {content.texts.about.SecondPart}
              </span>
            }
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "50vw" }}
            breakpoints={{
              "4000px": "641px",
              "1024px": "641px",
              "641px": "85vw",
            }}
          >
            <div className="text-paragraph3 px-4 pb-4">
              <p className={`mt-[15px] mb-[20px] ${textOpacityModal}`}>
                {content.texts.about.modal}
              </p>
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
                label={content.texts.navbar.ctaButtonText}
                bgClass={
                  colorMode === "defaultDark" || colorMode === "defaultLight"
                    ? defaultButtonThemes.light
                    : defaultButtonThemes.dark
                }
                className={`clickevent`}
              />
            </div>
          </Dialog>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default AboutNovoTemplate;
