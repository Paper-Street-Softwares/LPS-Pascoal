import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content.jsx";

export default function InventarioComparativo({ colorMode }) {
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image,
    borderT;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-white";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosPreto";
      stepNumberBg = "bg-white";
      stepNumberText = "text-primaryDark";
      lineColor = "bg-primaryDark/20";
      textDestaque = "text-primaryDark";
      image = " border-[8px] border-white";
      borderT = "border-t-primaryDark";
      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      backgroundMode = "bg-dark";
      stepNumberBg = "bg-dark";
      stepNumberText = "text-primaryLight";
      lineColor = "bg-primaryLight/20";
      textDestaque = "text-primaryLight";
      image = " border-[8px] border-borderImage";
      borderT = "border-t-primaryLight";

      break;
    case "defaultDark":
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      backgroundMode = "bg-secondary/60";
      stepNumberBg = "bg-white";
      stepNumberText = "text-primaryDark";
      lineColor = "bg-primaryDark/20";
      textDestaque = "text-primaryDark";
      image = " border-[8px] border-white";
      borderT = "border-t-primaryDark";
      break;

    case "defaultLight":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      backgroundMode = "bg-dark";
      stepNumberBg = "bg-dark";
      stepNumberText = "text-primaryLight";
      lineColor = "bg-primaryLight/20";
      textDestaque = "text-primaryLight";
      image = " border-[8px] border-borderImage";
      borderT = "border-t-primaryLight";
  }
  return (
    <SectionArea data-theme={colorMode} className={`${backgroundMode}`}>
      <SectionWrapper>
        <SectionHeaderNovo
          title={content.texts.planilha.title}
          className="mb-4"
          colorMode={colorMode}
        />
        <div className="w-full max-w-5xl mx-auto p-4 font-secondFont">
          <div className="grid grid-cols-1 md:grid-cols-2 border rounded-lg overflow-hidden shadow-sm">
            {/* Coluna Extrajudicial */}
            <div className="border-r">
              <div
                className={`bg-emerald-600 ${text} font-semibold text-center p-3`}
              >
                Inventário Extrajudicial (Cartório)
              </div>

              <div className="divide-y">
                <Item
                  title="Quando:"
                  text="Herdeiros concordam com tudo e não há menores/incapazes."
                  colorMode={colorMode}
                />
                <Item
                  title="Velocidade:"
                  text="Conclusão em semanas."
                  colorMode={colorMode}
                />
                <Item
                  title="Custo:"
                  text="Geralmente menor, com taxas de cartório."
                  colorMode={colorMode}
                />
                <Item
                  title="Nossa atuação:"
                  text="Elaboração da escritura e protocolo imediato."
                  colorMode={colorMode}
                />
              </div>
            </div>

            {/* Coluna Judicial */}
            <div>
              <div
                className={`bg-red-600 ${text} font-semibold text-center p-3`}
              >
                Inventário Judicial
              </div>

              <div className="divide-y">
                <Item
                  title="Quando:"
                  text="Há testamento, menores envolvidos ou divergência entre herdeiros."
                  colorMode={colorMode}
                />
                <Item
                  title="Velocidade:"
                  text="Ritmo do Judiciário (exige acompanhamento constante)."
                  colorMode={colorMode}
                />
                <Item
                  title="Custo:"
                  text="Custas processuais conforme o valor da herança."
                  colorMode={colorMode}
                />
                <Item
                  title="Nossa atuação:"
                  text="Defesa técnica especializada e busca por conciliação."
                  colorMode={colorMode}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

/* Item reutilizável */
function Item({ title, text, colorMode }) {
  let textOpacity, textDestaque, textTitleColor;
  switch (colorMode) {
    case "light":
      textTitleColor = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      break;
    case "dark":
      textTitleColor = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      break;
    case "defaultDark":
      textTitleColor = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      break;
    case "defaultLight":
      textTitleColor = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
  }

  return (
    <div className="p-4 font-secondFont min-h-28">
      <span className={`font-semibold ${textTitleColor}`}>{title}</span>
      <p className={`${textOpacity} mt-1`}>{text}</p>
    </div>
  );
}
