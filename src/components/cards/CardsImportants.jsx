import React from "react";
import imgIcon from "../../assets/imgs/icons/exclamation.webp";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function CardsImportants({
  title,
  paragraph,
  colorMode,
  className,
  iconColor,
}) {
  let backgroundMode,
    text,
    textOpacity,
    cardBg,
    iconBg,
    image,
    bgObservation,
    textDestaque,
    textObservation;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-terciary";
      iconBg = "bg-white text-primaryDark";
      image = " border-[8px] border-white";
      bgObservation = "bg-primaryDark";
      textObservation = "text-white";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      cardBg = "bg-dark";
      iconBg = "bg-darkOpacity text-primaryLight";
      image = " border-[8px] border-borderImage";
      bgObservation = "bg-primaryLight";
      textObservation = "text-black";

      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      cardBg = "bg-quartenary";
      iconBg = "bg-white text-primaryDark";
      image = " border-[8px] border-white";
      bgObservation = "bg-primaryDark";
      textObservation = "text-white";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-white";
      cardBg = "bg-darkOpacity";
      iconBg = "bg-white text-primaryLight";
      image =
        " border-[8px] border-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      bgObservation = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      textObservation = "text-white";
  }

  const finalIconColor =
    iconColor ??
    (colorMode === "dark" || colorMode === "defaultDark"
      ? "text-primaryLight"
      : "#fff");

  return (
    <MotionDivDownToUp>
      <div className="grid">
        <div
          className={`group p-6 rounded-xl ${cardBg} hover:scale-105 transition-all duration-700 max-w-[500px]`}
        >
          <div
            className={`w-10 h-10 rounded-full ${iconBg} mb-4 flex items-center justify-center shadow-md transition-transform`}
          >
            <h1 className="font-bold text-3xl">!</h1>
          </div>
          <h1
            className={`font-secondFont font-bold text-lg mb-2 ${text} transition-all`}
          >
            {title}
          </h1>
          <p
            className={`text-sm font-secondFont font-light ${textOpacity} transition-all`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default CardsImportants;
