import React from "react";

function ParceriaCard({ img, alt, text, name, role, colorMode }) {
  let titleColor, descrptionColor, bgCard;
  switch (colorMode) {
    case "light":
      titleColor = "text-corTitulosPreto";
      descrptionColor = "text-corOutrosTextosPreto";
      bgCard = "bg-terciary";
      break;

    case "dark":
      titleColor = "text-corTitulosBranca";
      descrptionColor = "text-corOutrosTextosBranca";
      bgCard = "bg-black";
      break;

    case "defaultDark":
      titleColor = "text-corTitulosBranca";
      descrptionColor = "text-corOutrosTextosBranca";
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
      break;

    case "defaultLight":
      titleColor = "text-corTitulosBranca";
      descrptionColor = "text-corOutrosTextosBranca";
      bgCard = "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]";
  }
  return (
    <div
      className={`font-secondFont flex flex-col justify-between 
      p-[52px] 
      w-full max-w-[426px] h-[400px]
     rounded-sm shadow-sm ${bgCard}`}
    >
      {/* Logo */}
      <div className="w-16 phone3:w-16 phone3:h-16 mb-6">
        <img src={img} alt={alt} className="w-full h-full object-contain" />
      </div>

      {/* Role */}
      <div className="mb-4">
        <p
          className={`font-semibold text-paragraph4 phone3:text-title1 leading-6 ${titleColor}`}
        >
          {role}
        </p>
      </div>

      {/* Description */}
      <div className="flex-1">
        <p
          className={`text-base leading-relaxed text-paragraph2 phone3:text-paragraph4 ${descrptionColor}`}
        >
          {text}
        </p>
      </div>

      {/* Name */}
      <div className="mt-6">
        <p className={`font-semibold text-paragraph3 ${titleColor}`}>{name}.</p>
      </div>
    </div>
  );
}

export default ParceriaCard;
