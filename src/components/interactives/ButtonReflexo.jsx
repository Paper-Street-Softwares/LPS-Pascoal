import {
  defaultButtonThemesSecondary,
  useColorMode,
} from "../../context/UseContextArchive";
import { whatsAppThemes } from "../../context/UseContextArchive";
import { alertTheme } from "../../context/UseContextArchive";
import { defaultButtonThemes } from "../../context/UseContextArchive";

export default function ButtonReflexo({
  link,
  icon,
  label,
  reflexAnimation = true,
  padding,
  className,
  bgClass,
  shineClass,
  id,
  variant = "primary",
  emergency = false, // ativa um único botão de emergencia onde quiser, coloque o id="ligar" e o emergency
  ...props
}) {
  const { colorMode, whatsAppColor, showGlobalButton } = useColorMode();
  const isLigar = id === "ligar";
  const effectiveWhatsAppColor = isLigar ? false : whatsAppColor;

  const shadowClass =
    variant === "secondary"
      ? "shadow-none"
      : isLigar
        ? "shadow-red-500/30"
        : effectiveWhatsAppColor
          ? "shadow-wppLight/30"
          : colorMode === "dark"
            ? "shadow-primaryLight/20"
            : "shadow-primaryDark/20";

  const shineThemes = {
    light: "bg-white/40",
    dark: "bg-white/40",
    defaultDark: "bg-white/40",
    defaultLight: "bg-white/40",
  };

  const themeById = {
    ligar: alertTheme,
  };

  const resolvedTheme = themeById[id];

  const primaryColors = resolvedTheme
    ? resolvedTheme[colorMode]
    : effectiveWhatsAppColor
      ? whatsAppThemes[colorMode]
      : (bgClass ?? defaultButtonThemes[colorMode]);

  const secondaryColors = bgClass ?? defaultButtonThemesSecondary[colorMode];

  const colors = variant === "secondary" ? secondaryColors : primaryColors;

  const shineColor = shineClass ?? shineThemes[colorMode];
  const spacing = padding || "px-6 py-3";

  if (id === "ligar" && !showGlobalButton && !emergency) {
    return null;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      aria-label="Botão"
      className={`${className}
        relative overflow-hidden inline-flex items-center justify-center
        ${colors}
        ${spacing}
        font-normal font-secondFont rounded-full text-lg
        transition-all scale-100 hover:scale-90 duration-500
        ${shadowClass}
        gap-3 text-paragraph3 tablet1:text-paragraph4
        min-w-[10px] text-center cursor-pointer
      `}
      {...props}
    >
      {reflexAnimation && (
        <span
          className={`
            absolute top-0 left-0 w-full h-full
            ${shineColor} animate-shine-loop
            z-0 pointer-events-none
          `}
        />
      )}

      <span className="relative z-10 flex items-center gap-3">
        {icon && <span>{icon}</span>}
        {label}
      </span>
    </a>
  );
}
