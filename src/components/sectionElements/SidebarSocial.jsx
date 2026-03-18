import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import {
  X,
  HomeIcon,
  UserSearch,
  ServerIcon,
  HelpCircle,
  AlignJustify,
  MapPin,
  FileText,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import content from "../../content/content";

export default function SidebarSocial({ colorMode, mode = "blog" }) {
  const [visible, setVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setVisible(!visible);

  useEffect(() => {
    const allIds = content.texts.navbar.menuId;
    const allLabels = content.texts.navbar.menuItems;

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    if (mode === "site") {
      setVisibleSections(paired);
    } else {
      setVisibleSections(paired);
    }
  }, [mode]);

  const icons = [
    <HomeIcon />,
    <UserSearch />,
    <ServerIcon />,
    // <FileText />,
    <HelpCircle />,
    // <MapPin />,
  ];

  let colorButton, bgSidebar, textColor, border;

  switch (colorMode) {
    case "light":
      colorButton = "text-black";
      bgSidebar = "bg-white";
      textColor = "text-corTitulosPreto";
      border = "border-black";
      break;
    case "dark":
      colorButton = "text-primaryLight";
      bgSidebar = "bg-darkOpacity";
      textColor = "text-corTitulosBranca";
      border = "border-white";
      break;
    case "defaultDark":
      colorButton = "text-white";
      bgSidebar = "bg-primaryDark";
      textColor = "text-corTitulosBranca";
      border = "border-primaryLight";
      break;
    case "defaultLight":
      colorButton = "text-black";
      bgSidebar = "bg-white";
      textColor = "text-corTitulosPreto";
      border = "border-black";
  }

  return (
    <div className="inset-0 z-10 flex">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-40 min-h-screen lg:hidden `}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${colorButton}
           w-[30px] h-[30px]`}
          onClick={() => setVisible(true)}
        />

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none surface-section lg:hidden lg:static z-1 surface-border border-neutral-700 ${bgSidebar}`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-[80%] h-auto"
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      rounded
                      outlined
                      className={`${colorButton}`}
                    >
                      <X size={32} />
                    </Button>
                  </span>
                </div>

                <div className="h-screen overflow-y-auto">
                  <hr
                    className={`m-5 mx-3 border-top-1 surface-border ${border}`}
                  />
                  <ul className="p-3 m-0 list-none">
                    <li>
                      <ul
                        className={`p-0 m-0 -mt-[16px] overflow-hidden font-medium ${textColor} list-none text-paragraph3 font-secondFont`}
                      >
                        {visibleSections.map(({ id, label }, index) => (
                          <li key={id}>
                            <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                              {icons[index] || <HelpCircle />}
                              <span className="ml-[8px]">
                                {mode === "site" ? (
                                  <RouterLink
                                    to={
                                      id === "inicio"
                                        ? "/"
                                        : `/${id.toLowerCase()}`
                                    }
                                    className="align-text-top cursor-pointer"
                                  >
                                    {label}
                                  </RouterLink>
                                ) : (
                                  <ScrollLink
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    onClick={() => setVisible(false)}
                                    className="align-text-top cursor-pointer"
                                  >
                                    {label}
                                  </ScrollLink>
                                )}
                              </span>
                              <Ripple />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
