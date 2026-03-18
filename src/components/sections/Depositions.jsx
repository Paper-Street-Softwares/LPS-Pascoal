import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";

import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";

export default function Depositions({ colorMode }) {
  // const responsiveOptions = [
  //   {
  //     breakpoint: "1400px",
  //     numVisible: 2,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "1199px",
  //     numVisible: 2,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "767px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  //   {
  //     breakpoint: "575px",
  //     numVisible: 1,
  //     numScroll: 1,
  //   },
  // ];

  const imagensList = Object.values(content.texts.depositions.imagens);

  // const depositionTemplate = (item) => {
  //   return (
  //     <div className="m-3 p-4 bg-transparent flex items-center justify-center desktop1:h-[320px]">
  //       <img
  //         src={item.img}
  //         alt={item.alt}
  //         className="max-h-full max-w-full object-contain rounded-xl "
  //       />
  //     </div>
  //   );
  // };

  return (
    <div className="relative bg-transparent">
      <SectionArea>
        <SectionHeaderNovo
          colorMode={colorMode}
          miniTitle={content.texts.depositions.miniTag}
          title={content.texts.depositions.FirstPart}
          subtitle={content.texts.depositions.subtitle}
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="desktop1:w-[80%] w-full flex flex-col gap-2 tablet1:grid tablet1:grid-cols-2 desktop1:grid-cols-2">
              {imagensList.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt={item.alt}
                  className="w-full mx-auto border-2 border-primaryDark/20 shadow-md rounded-md"
                />
              ))}
              {/* <Carousel
                value={imagensList}
                numVisible={2}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={4000}
                itemTemplate={depositionTemplate}
              /> */}
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
