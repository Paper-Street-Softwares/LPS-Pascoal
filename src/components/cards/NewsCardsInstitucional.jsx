import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

function NewsCardsInstitucional({
  category,
  imageUrl,
  title,
  date,
  author,
  excerpt,
}) {
  return (
    <div className="overflow-hidden transition-all duration-300 flex flex-col w-full tablet2:w-[46.2%] desktop1:w-[47.2%] desktop2:w-[280px] h-full">
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full min-h-[362px] object-cover transition-transform duration-700 "
        />
      </div>

      <div className=" flex flex-col flex-1">
        <h1 className="font-mainFont text-lg font-bold text-[#0f2a3a] mt-3 leading-6">
          {title}
        </h1>

        <div className="mt-auto pt-1">
          <button className="text-[#d85c34] text-xs font-medium tracking-widest flex items-center">
            Leia Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCardsInstitucional;
