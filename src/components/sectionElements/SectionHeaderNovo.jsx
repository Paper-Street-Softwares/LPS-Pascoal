import React from "react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function SectionHeaderNovo({
  miniTitle,
  title,
  destaque,
  secondPart,
  subtitle,
  colorMode,
  type,
  usage,
  className,
}) {
  let textDestaque,
    text,
    textOpacity,
    cardBg,
    borderCard,
    arrowColor,
    imageBorder,
    miniTag;

  switch (colorMode) {
    case "light":
      textDestaque = "text-primaryDark";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-mutedForeground group-hover:text-primaryDark";
      imageBorder = "border-white";
      miniTag = "text-primaryDark";
      break;

    case "dark":
      textDestaque = "text-primaryLight";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-gray-900";
      borderCard = "border-gray-700";
      arrowColor = "text-mutedForeground group-hover:text-primaryLight";
      imageBorder = "border-borderImage";
      miniTag = "text-primaryLight";
      break;

    case "defaultDark":
      textDestaque = "text-primaryDark";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      cardBg = "bg-white";
      borderCard = "border-border";
      arrowColor = "text-mutedForeground group-hover:text-primaryDark";
      imageBorder = "border-white";
      miniTag = "text-primaryDark";
      break;

    case "defaultLight":
      textDestaque = "text-white";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-gray-900";
      borderCard = "border-gray-700";
      arrowColor = "text-mutedForeground group-hover:text-primaryLight";
      imageBorder = "border-borderImage";
      miniTag = "text-white";
  }

  if (type === "article") {
    usage = "text-start mb-8";
  } else {
    usage = "text-center mb-16";
  }

  return (
    <MotionDivDownToUp>
      <div className={`w-full mx-auto ${className} ${usage}`}>
        {miniTitle && (
          <span
            className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTag}`}
          >
            {miniTitle}
          </span>
        )}

        {title && (
          <h2
            className={`text-3xl md:text-4xl font-mainFont font-medium mb-4 ${text}`}
          >
            {title} <span className={`italic ${textDestaque}`}>{destaque}</span>{" "}
            {secondPart}
          </h2>
        )}

        {subtitle && (
          <p className={`font-secondFont font-light ${textOpacity}`}>
            {subtitle}
          </p>
        )}
      </div>
    </MotionDivDownToUp>
  );
}

export default SectionHeaderNovo;
