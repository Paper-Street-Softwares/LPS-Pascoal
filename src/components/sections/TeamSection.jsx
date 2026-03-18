import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "primereact/dialog";
import { ArrowRight, X } from "lucide-react";

import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { Button } from "../interactives/ButtonNovoTemplate";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function TeamSectionNew({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const openModal = (cardKey) => {
    setActiveCard(cardKey);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setActiveCard(null);
  };

  let backgroundMode, text, textOpacity, textDestaque, image;

  switch (colorMode) {
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      image = "border-[8px] border-borderImage";
      break;
    case "defaultDark":
      backgroundMode = "bg-white";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      image = "border-[8px] border-white";
      break;
    case "defaultLight":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      image = "border-[8px] border-borderImage";
  }

  const modalContent = {
    card1: {
      title: content.texts.team.cards.card1.name,
      text: content.texts.team.cards.card1.description,
    },
    card2: {
      title: content.texts.team.cards.card2.name,
      text: content.texts.team.cards.card2.description,
    },
  };

  return (
    <SectionArea data-theme={colorMode} className={backgroundMode}>
      <SectionWrapper className="desktop1:max-w-[900px]">
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          colorMode={colorMode}
        />

        <MotionDivDownToUp>
          <section className="flex flex-col gap-16 ">
            <div className="flex flex-col-reverse desktop1:flex-row-reverse gap-4 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-2 max-w-[380px]"
              >
                <span className={`uppercase font-bold ${textDestaque}`}>
                  {content.texts.team.cards.card1.title}
                </span>

                <h2 className={`text-3xl font-mainFont ${text}`}>
                  {content.texts.team.cards.card1.name}
                </h2>

                <p className={`font-secondFont ${textOpacity}`}>
                  {content.texts.team.cards.card1.description}
                </p>

                {/* <Button
                onClick={() => openModal("card1")}
                className={`bg-transparent px-0 uppercase font-bold flex items-center gap-2 border-none ${textDestaque} underline sclae-100 hover:scale-90 duration-500 transition-all`}
              >
                Saiba mais <ArrowRight size={20} />
              </Button> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-[380px]"
              >
                <div className={`rounded-3xl overflow-hidden ${image}`}>
                  <img
                    src={content.texts.team.cards.card1.img}
                    width={399}
                    height={498}
                    alt="imagem do Advogado"
                    className="w-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col-reverse desktop1:flex-row gap-4 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4 max-w-[380px]"
              >
                <span className={`uppercase font-bold ${textDestaque}`}>
                  {content.texts.team.cards.card2.title}
                </span>

                <h2 className={`text-3xl font-mainFont ${text}`}>
                  {content.texts.team.cards.card2.name}
                </h2>

                <p className={`font-secondFont ${textOpacity}`}>
                  {content.texts.team.cards.card2.description}
                </p>

                <Button
                  // onClick={() => openModal("card2")}
                  className={`bg-transparent px-0 uppercase font-bold flex items-center gap-2 border-none ${textDestaque} underline sclae-100 hover:scale-90 duration-500 transition-all`}
                >
                  {/* Saiba mais <ArrowRight size={20} /> */}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-[380px]"
              >
                <div className={`rounded-3xl overflow-hidden ${image}`}>
                  <img
                    src={content.texts.team.cards.card2.img}
                    width={399}
                    height={498}
                    alt="imagem da Advogada"
                    className="w-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </MotionDivDownToUp>

        <Dialog
          visible={visible}
          onHide={closeModal}
          closeIcon={<X size={20} />}
          className="font-secondFont bg-white p-4 rounded-md"
          header={
            <span className="font-mainFont px-4 text-title1 font-bold">
              {activeCard && modalContent[activeCard].title}
            </span>
          }
          headerClassName="pb-3"
          style={{ width: "50vw" }}
          breakpoints={{
            "4000px": "640px",
            "1024px": "640px",
            "641px": "85vw",
          }}
        >
          {activeCard && (
            <div className="px-4 pb-4 space-y-4">
              <p className={`text-black`}>{modalContent[activeCard].text}</p>

              {/* <ButtonReflexo
                link={content.texts.links.ctaWhatsapp}
                label="Falar com especialista"
                colorMode={colorMode}
              /> */}
            </div>
          )}
        </Dialog>
      </SectionWrapper>
    </SectionArea>
  );
}

export default TeamSectionNew;
