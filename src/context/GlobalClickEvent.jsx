import { useEffect } from "react";
import { useColorMode } from "./UseContextArchive";

export default function GlobalClickEvent() {
  const { enableClickEvent } = useColorMode();

  useEffect(() => {
    function handleClick(e) {
      if (!enableClickEvent) return;

      const button = e.target.closest(".clickevent");
      if (!button) return;

      console.log("Evento disparado via classe!");

      // adicionar evento
      gtag_report_conversion();
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [enableClickEvent]);

  return null;
}
