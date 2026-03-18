import React from "react";
import { AlertTriangle, Phone } from "lucide-react";
import ButtonReflexo from "../interactives/ButtonReflexo";
import ButtonAlert from "../interactives/ButtonAlert";
import content from "../../content/content";

function Emergency({ colorMode }) {
  let backgroundMode,
    text,
    textOpacity,
    textDestaque,
    bgSvg,
    borderSVG,
    textSvg;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-secondary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgSvg = "bg-primaryDark";
      borderSVG = "bg-red-500/20 text-red-500 border border-red-500/20 ";
      textSvg = "text-red-800 ";

      break;
    case "dark":
      backgroundMode = "bg-secondary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgSvg = "bg-primaryDark";
      borderSVG = "bg-red-500/20 text-red-500 border border-red-500/20 ";
      textSvg = "text-red-800 ";

      break;
    case "defaultDark":
      backgroundMode = "bg-secondary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgSvg = "bg-primaryDark";
      borderSVG = "bg-red-500/20 text-red-500 border border-red-500/20 ";
      textSvg = "text-red-800 ";
      break;
    case "defaultLight":
      backgroundMode = "bg-secondary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgSvg = "bg-primaryDark";
      borderSVG = "bg-red-500/20 text-red-500 border border-red-500/20 ";
      textSvg = "text-red-800 ";
  }
  return (
    <div>
      <section className="relative py-8 bg-red-700/30 border-y border-red-900/30 overflow-hidden font-secondFont">
        {/* Background Pulse Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,58,38,0.1)_0%,transparent_70%)] animate-pulse" />

        <div className=" mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 flex-1">
              <div
                className={`hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${borderSVG} ${bgSvg} animate-pulse`}
              >
                <AlertTriangle className={`h-6 w-6 ${textSvg}`} />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className={`h-5 w-5 sm:hidden ${textSvg}`} />
                  <span
                    className={`font-bold tracking-wider text-sm uppercase text-red-800`}
                  >
                    {content.texts.emergency.miniTag}
                  </span>
                </div>
                <h1 className={`text-xl md:text-2xl font-bold ${text} mb-2`}>
                  {content.texts.emergency.title}
                </h1>
                <p
                  className={`text-sm md:text-base max-w-2xl leading-relaxed ${text}`}
                >
                  {content.texts.emergency.subtitle}
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <ButtonReflexo
                id="ligar"
                emergency
                icon={<Phone width={20} />}
                link={`tel:${content.texts.infos.phone}`}
                label={content.texts.emergency.ctaButtonText}
                colorMode={colorMode}
                bgClass="bg-red-800"
                className="text-white shadow-red-500/80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Emergency;
