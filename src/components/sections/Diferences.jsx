import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, UserCheck, Clock } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import { Check } from "lucide-react";
import content from "../../content/content.jsx";
import ButtonReflexo from "../interactives/ButtonReflexo.jsx";
import { defaultButtonThemes } from "../../context/UseContextArchive.jsx";

export function Diferences({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    textDestaque,
    bgCards,
    borderSVG,
    bgContainer;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      bgCards = "bg-white shadow";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-terciary";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-black";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-darkOpacity";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";
      bgCards = "bg-white shadow";
      borderSVG = "border-primaryLight";
      bgContainer = "bg-terciary";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgCards = "bg-primaryLight";
      borderSVG = "border-primaryLight";
      bgContainer = "";
  }
  const differentials = Object.values(content.texts.diferences.cards);

  return (
    <SectionArea
      paddingtop={false}
      className={`py-24 relative overflow-hidden ${backgroundMode}`}
    >
      <SectionWrapper>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div
              className={`backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl ${bgContainer}`}
            >
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-sm font-bold tracking-wides uppercase block font-secondFont ${text}`}
                    >
                      {content.texts.diferences.miniTag}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-3xl md:text-4xl lg:text-5xl font-mainFont font-bold leading-tight ${text}`}
                    >
                      {content.texts.diferences.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-lg leading-relaxed border-l-2 ${borderSVG} font-secondFont pl-6 ${textOpacity}`}
                    >
                      {content.texts.diferences.subtitle}
                    </motion.p>
                  </div>

                  <div className="space-y-3">
                    {differentials.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-colors"
                      >
                        <div
                          className={`w-auto p-1 rounded-lg flex items-center justify-center ${bgCards} group-hover:scale-110 transition-transform text-black`}
                        >
                          <span>
                            {" "}
                            <item.icon
                              className={`w-5 h-5 text-primaryLight`}
                            />
                          </span>
                        </div>
                        <span
                          className={`font-bold text-lg font-secondFont ${textOpacity}`}
                        >
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-6">
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
              label={content.texts.diferences.ctaButtonText}
              bgClass={
                colorMode === "defaultDark" || colorMode === "light"
                  ? defaultButtonThemes.light
                  : defaultButtonThemes.dark
              }
              className={`clickevent w-fit`}
            />
          </div> */}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
