import React from "react";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "../interactives/ButtonNovoTemplate";
import { motion } from "framer-motion";
import SectionAria from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import content from "../../content/content";
import { Link } from "react-scroll";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { useContext } from "react";
import SidebarSocial from "../sectionElements/SidebarSocial";

function NavbarNovaTemplate({
  colorMode,
  backgrondMode,
  backgrondModeActive,
  textOpacity,
  hoverLinks,
  colorMenu,
  bgOpacitySidebar,
  borderButtons,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const labels = content.texts.navbar.menuItems;
  const ids = content.texts.navbar.menuId;

  switch (colorMode) {
    case "light":
      backgrondMode = "bg-white";
      textOpacity = "text-corTitulosPreto";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-transparent";

      break;
    case "dark":
      backgrondMode = "bg-black";
      textOpacity = "text-corOutrosTextosBranca";
      hoverLinks = " bg-gradient-to-r from-primaryLight to-primaryLight ";
      colorMenu = "text-primaryLight";
      bgOpacitySidebar = "bg-black/70";
      backgrondModeActive = "bg-transparent";

      break;
    case "defaultDark":
      backgrondMode = "bg-primaryDark";
      textOpacity = "text-corTitulosBranca";
      hoverLinks = " bg-gradient-to-r from-white to-white ";
      colorMenu = "text-white";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-primaryDark";
      backgrondModeActive = "bg-transparent";
      break;

    case "defaultLight":
      backgrondMode = "bg-white";
      textOpacity = "text-corTitulosPreto";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-transparent";
  }

  return (
    <SectionWrapper>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled
            ? `${backgrondMode} backdrop-blur-md py-1 shadow-sm border-shadowHero/10 h-auto`
            : `${backgrondModeActive} border-border/40 py-0 phone2:h-auto`
        }`}
      >
        <div className="container flex items-center m-auto max-w-[1215px] h-full w-[90%] justify-between py-2">
          <div
            className={`flex flex-col z-20 relative ${
              isScrolled
                ? "w-[30%] h-[20px] phone2:w-[30%] phone2:h-[30px] tablet1:h-[50px] tablet1:w-[20%] desktop1:w-[10%] desktop1:h-[50px] desktop2:w-[13%] transition-all duration-700"
                : "w-[50%] h-[40px] phone2:py-3 phone2:w-[60%] phone2:h-[80px] tablet1:h-[80px] tablet1:w-[30%] desktop1:w-[20%] desktop1:h-[110px] desktop2:w-[15%] transition-all duration-700"
            }`}
          >
            <a
              className="cursor-pointer w-fit h-[80px] tablet1:h-[120px] desktop1:h-[110px] flex items-center justify-start overflow-hidden "
              href="/"
              onClick={() => window.location.reload()}
              aria-label="recarregar página"
            >
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="desktop1:hidden w-auto max-h-full object-contain flex"
                width={217}
                height={46}
                fetchPriority="high"
              />
              <img
                src={content.texts.navbar.logo.imgDesktop}
                alt={content.texts.navbar.logo.alt}
                className="hidden desktop1:block h-full w-auto object-contain"
                width={300}
                height={64}
                fetchPriority="high"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden desktop1:flex items-center gap-8 text-sm font-secondFont font-medium">
            {labels.map((item, index) => {
              const id = ids[index];

              return (
                <ul>
                  {" "}
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-label={`Link para ${item}`}
                      title={item}
                      data-track={id}
                      className={`cursor-pointer ${hoverLinks} bg-[length:0%_2px] bg-no-repeat bg-left-bottom pb-1 transition-[background-size] duration-300 hover:bg-[length:100%_2px] ${textOpacity} font-secondFont`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (el) {
                          const yOffset = -70;
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            yOffset;

                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                </ul>
              );
            })}
            <ButtonReflexo
              label="Contato"
              link={content.texts.links.ctaWhatsapp}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                </svg>
              }
              colorMode={colorMode}
              className="clickevent text-sm mb-0"
            />
          </div>

          <div className=" lg:hidden ">
            <SidebarSocial colorMode={colorMode} />
          </div>

          {/* Mobile Toggle */}
          {/* <button
            className="desktop1:hidden p-2 z-50 relative text-foreground "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                aria-label="Botão de fechar a Sidebar"
                className={`${colorMenu}`}
              />
            ) : (
              <Menu
                aria-label="botão Meu da Sidebar"
                width={30}
                height={30}
                className={`${colorMenu}`}
              />
            )}
          </button> */}

          {/* Mobile Menu */}
          {/* {isMobileMenuOpen && (
            <div className="fixed inset-0 pt-24 px-6 desktop1:hidden z-40 w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed inset-0 pt-24 px-6 desktop1:hidden z-40 w-full"
              >
                <div
                  className={`flex flex-col gap-6 max-w-[500px] text-center items-center p-4 text-lg mx-auto font-secondFont font-medium border-l border-r border-b border-primary/20 rounded-md ${backgrondMode}`}
                >
                  {labels.map((item, index) => {
                    const id = ids[index]

                    return (
                      <ul>
                        {' '}
                        <li key={id}>
                          <a
                            href={`#${id}`}
                            aria-label={`Link para ${item}`}
                            title={item}
                            data-track={id}
                            className={`cursor-pointer bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px] ${textOpacity}`}
                            onClick={(e) => {
                              e.preventDefault()
                              const el = document.getElementById(id)
                              if (el) {
                                const yOffset = -90
                                const y =
                                  el.getBoundingClientRect().top +
                                  window.scrollY +
                                  yOffset

                                window.scrollTo({ top: y, behavior: 'smooth' })
                              }
                            }}
                          >
                            {item}
                          </a>
                        </li>
                      </ul>
                    )
                  })}
                  <ButtonReflexo
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                      </svg>
                    }
                    link={content.texts.links.ctaWhatsapp}
                    label={content.texts.navbar.ctaButtonText}
                    colorMode={colorMode}
                  />
                </div>
              </motion.div>
              <div
                className={`absolute z-0 inset-0 ${bgOpacitySidebar} h-screen`}
              ></div>
            </div>
          )} */}
        </div>
      </nav>
    </SectionWrapper>
  );
}

export default NavbarNovaTemplate;
