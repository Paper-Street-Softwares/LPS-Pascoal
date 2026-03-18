export function AlternatingSection({
  index,
  colorMode,
  children,
  forcePrimaryDark = false,
}) {
  const colors = {
    light: ["bg-white", "bg-neutral-50"],
    defaultDark: ["bg-white", "bg-secondary"],
    defaultLight: [
      "bg-[color-mix(in_srgb,var(--primaryDark),black_30%)]",
      "bg-primaryDark",
    ],
    dark: ["bg-black", "bg-darkOpacity"],
  };

  // caso especial do default
  if (colorMode === "defaultDark" && forcePrimaryDark) {
    return <section className="bg-primaryDark">{children}</section>;
  }

  if (colorMode === "defaultLight" && forcePrimaryDark) {
    return <section className="bg-white">{children}</section>;
  }

  const bgClass = colors[colorMode][index % 2];

  return <section className={bgClass}>{children}</section>;
}
