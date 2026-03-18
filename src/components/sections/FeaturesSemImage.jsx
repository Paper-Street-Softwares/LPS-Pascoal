import React from "react";
import { motion } from "framer-motion";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { Phone } from "lucide-react";

function FeaturesSemImage({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryLight";

      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";

      break;
    case "defaultDark":
      backgroundMode = "bg-secondary";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      break;

    case "defaultLight":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
  }
  return (
    <SectionArea id="feature" className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="relative font-mainFont">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* TÍTULO */}
              <div className="text-center max-w-3xl mx-auto">
                <span
                  className={`${textDestaque} font-bold font-secondFont tracking-wider uppercase text-xs block mb-2`}
                >
                  {content.texts.features.miniTag}
                </span>

                <h2
                  className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 flex flex-wrap phone2:gap-3 justify-center ${text}`}
                >
                  {content.texts.features.FirstPartTitle}{" "}
                  <span className={textDestaque}>
                    {content.texts.features.DestaquePartTitle}
                  </span>{" "}
                  {content.texts.features.SecondPartTitle}
                </h2>

                <p className={`font-secondFont font-light ${textOpacity}`}>
                  {content.texts.features.subtitle}
                </p>
              </div>

              {/* LISTAS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {/* CARD ESQUERDO */}
                <div className="bg-black/40 h-fit backdrop-blur-md rounded-2xl p-10 shadow-2xl">
                  <ul className="space-y-3 text-neutral-200 text-sm md:text-base font-secondFont">
                    {[
                      "Atendimento criminal 24 horas, online e presencial",
                      "Prisão em flagrante",
                      "Lavratura e acompanhamento de flagrante",
                      "Acompanhamento em delegacias de polícia",
                      "Diligências urgentes em órgãos policiais",
                      "Depoimentos em delegacias",
                      "Audiência de custódia",
                      "Atuação em inquérito policial",
                      "Defesa em ação penal",
                      "Audiência de instrução e julgamento",
                      "Sustentação oral",
                      "Elaboração de recursos criminais",
                      "Apelação criminal",
                      "Acompanhamento processual até o trânsito em julgado",
                      "Habeas corpus",
                      "Pedido de liberdade provisória",
                      "Relaxamento de prisão",
                      "Revogação de prisão",
                      "Atuação no Tribunal do Júri",
                      "Defesa em crimes dolosos contra a vida",
                      "Execução penal",
                      "Progressão de regime",
                      "Livramento condicional",
                      "Indulto",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primaryLight">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CARD DIREITO */}
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
                  <ul className="space-y-3 text-neutral-200 text-sm md:text-base font-secondFont">
                    {[
                      "Agravo em execução",
                      "Revisão criminal",
                      "Crimes de trânsito (Lei Seca, homicídio culposo e lesão corporal)",
                      "Liberação de veículos apreendidos",
                      "Crimes contra a ordem econômica",
                      "Crimes contra a ordem tributária",
                      "Crimes contra o sistema financeiro nacional",
                      "Crimes contra o sistema previdenciário",
                      "Crimes contra as finanças públicas",
                      "Crimes falimentares",
                      "Crimes de colarinho branco",
                      "Lavagem de capitais",
                      "Tráfico de drogas",
                      "Organização criminosa",
                      "Porte e posse ilegal de armas",
                      "Crimes de furto",
                      "Crimes de roubo",
                      "Contrabando e descaminho",
                      "Crimes ambientais",
                      "Violência doméstica (Lei Maria da Penha)",
                      "Juizado Especial Criminal",
                      "Vara da Infância e Juventude",
                      "Atuação no STJ",
                      "Atuação no STF",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primaryLight">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 w-fit justify-center items-center m-auto">
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
            </motion.div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FeaturesSemImage;
