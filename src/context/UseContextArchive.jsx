import { createContext, useContext, useState } from "react";

const ColorModeContext = createContext(null);

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState("defaultDark"); // defaultDark, defaultLight, light, dark

  const [whatsAppColor] = useState(true); // ativa cor do WhatsApp
  const [showGlobalButton] = useState(false); // ativa as os botões e caixa de alerta
  const [enableClickEvent, setEnableClickEvent] = useState(true); // Dispara evento de clique

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode,
        whatsAppColor,
        showGlobalButton,
        enableClickEvent,
        setEnableClickEvent,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export function NavbarRender() {
  const [navbarHero, setNavbarHero] = useState(false); // Renderiza navbar padrão

  return {
    navbarHero,
    setNavbarHero,
  };
}

export function ButtonsLps() {
  const [showGlobalButtonsLps, setShowGlobalButtonsLps] = useState(true); // ativa as os botões da lps

  return {
    showGlobalButtonsLps,
    setShowGlobalButtonsLps,
  };
}

export const whatsAppThemes = {
  light: "bg-wppDark text-corTitulosBranca border-green-600/30 shadow-lg",
  dark: "bg-wppLight text-corTitulosBranca border-green-600/30 shadow-lg",
  defaultDark: "bg-wppDark text-corTitulosBranca border-green-600/30 shadow-lg",
  defaultLight:
    "bg-wppDark text-corTitulosBranca border-green-600/30 shadow-lg",
};

export const defaultButtonThemes = {
  light: "bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ",
  dark: "bg-primaryLight text-corTitulosPreto",
  defaultDark: "bg-primaryLight text-corTitulosPreto",
  defaultLight:
    "bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ",
};

export const defaultButtonThemesSecondary = {
  light: "bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ",
  dark: "bg-transparent text-corTitulosBranca",
  defaultDark: "bg-primaryLight text-corTitulosPreto",
  defaultLight:
    "bg-primaryDark text-corTitulosBranca border border-primaryDark/20 ",
};

export const alertTheme = {
  light: "bg-red-800 text-corTitulosBranca shadow-lg",
  dark: "bg-red-800 text-corTitulosBranca shadow-white",
  defaultDark: "bg-red-800 text-corTitulosBranca",
  defaultLight: "bg-red-800 text-corTitulosBranca",
};

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within ColorModeProvider");
  }
  return context;
}
