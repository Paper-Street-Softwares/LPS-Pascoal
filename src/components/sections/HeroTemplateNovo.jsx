import React, { useRef, useState } from "react";
import { Button } from "../interactives/ButtonNovoTemplate";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  AlertTriangle,
  Check,
  Clock,
  CircleDollarSign,
  Users,
  Split,
  FileText,
  ChartNoAxesCombined,
  Scale,
  BriefcaseMedical,
  BriefcaseBusiness,
  Search,
  MapIcon,
} from "lucide-react";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ButtonReflexo from "../interactives/ButtonReflexo";
import ButtonAlert from "../interactives/ButtonAlert";
import { useColorMode } from "../../context/UseContextArchive";
import { NavbarRender } from "../../context/UseContextArchive";

function HeroTemplateNovo({
  colorMode,
  text,
  textOpacity,
  backgroundMode,
  bgFaixaHero,
  bgMinitag,
  textObs,
  image,
  bgAlertHero,
  textDestaque,
  borderColor,
  obs,
  obsTwo,
}) {
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-terciary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-transparent border-primaryDark text-primaryDark";
      // textObs = 'text-green-500'
      image = " border-[8px]";
      bgAlertHero = "bg-white";
      borderColor = "bg-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-white/5";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgMinitag = "bg-transparent border-primaryLight text-primaryLight";
      // textObs = 'text-green-500'
      image = " border-[8px]";
      bgAlertHero = "bg-black text-white/60";
      borderColor = "border-borderImage";

      break;
    case "defaultDark":
      backgroundMode = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      bgFaixaHero = "bg-primaryDark";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgMinitag = "bg-transparent border-primaryLight text-primaryLight";
      // textObs = 'text-green-500'
      image = " border-[8px]";
      bgAlertHero = "bg-black text-white/60";
      borderColor = " border-[color-mix(in_srgb,var(--primaryDark),black_40%)]";

      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      bgFaixaHero = "bg-terciary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-transparent border-primaryDark text-primaryDark";
      // textObs = 'text-green-500'
      image = " border-[8px]";
      bgAlertHero = "bg-white";
      borderColor = "bg-white";
  }

  const { navbarHero } = NavbarRender();

  const { showGlobalButton } = useColorMode();

  // const topicsCard = Object.values({
  //   card1: {
  //     icon: <Clock width={16} />,
  //     text: (
  //       <p>
  //         Recuperação do acesso em <strong>48 horas</strong> mediante tutela de
  //         urgência
  //       </p>
  //     ),
  //   },
  //   card2: {
  //     icon: <CircleDollarSign width={16} />,
  //     text: (
  //       <p>
  //         Possibilidade de indenização por danos morais de até{' '}
  //         <strong>R$15.000,00</strong>
  //       </p>
  //     ),
  //   },
  //   card3: {
  //     icon: <Users width={16} />,
  //     text: 'Contas pessoais e profissionais',
  //   },
  // })

  return (
    <SectionArea
      data-theme={colorMode}
      id="home"
      paddingTopAndBottom={false}
      className={`${backgroundMode}`}
    >
      <section
        className={`relative w-full ${navbarHero ? "pt-[64px] desktop1:pt-[96px] pb-[64px] desktop1:pb-[96px]" : "pt-[80px] phone2:pt-[100px] tablet1:pt-[125px] desktop1:pt-[175px] desktop2:pt-[190px] pb-[64px] desktop1:pb-[96px] "} flex items-center justify-center overflow-hidden font-mainFont`}
      >
        {/* Abstract Background Shapes */}
        <div
          className={`absolute top-0 right-[-10px] h-full w-[80%] -skew-x-12 translate-x-2/4 z-0 ${bgFaixaHero}`}
        />

        <SectionWrapper>
          <div className="relative z-10 grid lg:grid-cols-2 gap-4 phone2:gap-6 lg:gap-20 items-center w-full">
            {/* Content */}

            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-2 phone3:space-y-4 order-2 lg:order-1 flex flex-col ${navbarHero ? "items-center text-center desktop1:text-start desktop1:items-start" : "text-start items-start"}`}
            >
              {navbarHero && (
                <div className="mb-4 hidden desktop1:flex">
                  <img
                    src={content.texts.navbar.logo.imgDesktop}
                    alt={content.texts.navbar.logo.alt}
                    cl
                  />
                </div>
              )}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm text-[8px] phone2:text-xs font-secondFont font-bold tracking-wide uppercase ${bgMinitag}`}
              >
                <span>{content.texts.hero.minitagIcon}</span>
                {content.texts.hero.miniTag}
              </div>
              <h1
                className={` text-[22px] phone2:text-3xl phone3:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] desktop1:text-start ${text} `}
              >
                {content.texts.hero.FirstPart}{" "}
                <span className={`${textDestaque}`}>
                  {content.texts.hero.Destaque}
                </span>{" "}
                {content.texts.hero.SecondPart}
              </h1>

              <p
                className={`${navbarHero ? "text-center desktop1:text-start" : "text-start desktop1:text-start"} text-[14px] phone2:text-lg md:text-xl leading-relaxed max-w-lg font-secondFont font-extralight ${textOpacity}`}
              >
                {content.texts.hero.subtitle}
              </p>

              {/* <div
                className={`border font-secondFont p-2 rounded-md border-primaryDark text-[8px] phone2:text-[12px] phone3:text-[14px]`}
              >
                {topicsCard.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <span className={`${textDestaque}`}>{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div> */}

              <div className="flex flex-col gap-4 py-2 phone2:py-4">
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
                  label={content.texts.hero.ctaButtonText}
                  colorMode={colorMode}
                  className="clickevent my-0 text-[8px] phone2:text-paragraph3 tablet1:text-paragraph4"
                />

                <ButtonReflexo
                  id="ligar"
                  icon={<Phone width={20} />}
                  link={`tel:${content.texts.infos.phone}`}
                  label="Emergência? Ligue agora!"
                  colorMode={colorMode}
                />
              </div>
              {/* <hr
                className={`border-t ${text} ${
                  colorMode === 'light' ? 'opacity-90' : 'opacity-20'
                } w-full`}
              /> */}
              {obs && (
                <div
                  className={`flex ${navbarHero ? "justify-center desktop1:justify-start" : "justify-start"} items-start gap-2 desktop1:gap-3 text-sm w-full`}
                >
                  <div
                    className={`font-secondFont font-light flex gap-0 items-start ${textOpacity}`}
                  >
                    {/* <div className="relative flex mt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                    </div> */}

                    {content.texts.hero.obsHero.text}
                  </div>
                  {obsTwo && (
                    <span
                      className={`font-secondFont font-light flex gap-2 items-center ${textOpacity}`}
                    >
                      <span>{content.texts.hero.obsHero.iconTwo}</span>{" "}
                      {content.texts.hero.obsHero.textTwo}
                    </span>
                  )}
                </div>
              )}
            </div>

            {navbarHero && (
              <div className="mb-4 flex justify-center desktop1:hidden">
                <img
                  src={content.texts.navbar.logo.img}
                  alt={content.texts.navbar.logo.alt}
                />
              </div>
            )}
            {/* Image */}
            <div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div
                className={`relative rounded-[1.5rem] phone3:rounded-[2.5rem] overflow-hidden aspect-[2/1] phone3:aspect-[3/2] md:aspect-[3/2] lg:aspect-[3/4] ring-1 ring-black/5 ${borderColor} ${image}`}
              >
                <img
                  src={content.texts.hero.heroDefaulMobiletImg}
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 desktop1:hidden"
                  width={621}
                  height={349}
                  fetchPriority="high"
                />

                <img
                  src={content.texts.hero.heroDefaultImage}
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 hidden desktop1:flex"
                  width={621}
                  height={828}
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Card */}
                {/* {showGlobalButton && (
                  <div
                    id="ligar"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`absolute bottom-8 left-6 right-6 md:left-8 md:right-8  backdrop-blur-md p-4 phone3:p-4 rounded-2xl shadow-lg border ${borderColor} z-10 ${bgAlertHero}`}
                  >
                    <div className="flex items-center gap-4 phone3:gap-5 ">
                      <div>
                        <p
                          className={`text-[9px] phone2:text-xs font-secondFont font-bold ${textDestaque} tracking-widest uppercase mb-1`}
                        >
                          Plantão 24h
                        </p>
                        <p
                          className={`text-paragraph2 phone3:text-lg font-mainFont font-bold leading-none ${text}`}
                        >
                          Emergência? Ligue agora.
                        </p>
                      </div>
                      <div className="ml-auto">
                        <ButtonAlert
                          padding="p-2 phone3:p-4"
                          icon={
                            <Phone className="w-4 h-4 tablet1:w-6 tablet1:h-6 text-white" />
                          }
                          link={`tel:${content.texts.infos.phone}`}
                          className="bg-red-700"
                        />
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </SectionArea>
  );
}

export default HeroTemplateNovo;
