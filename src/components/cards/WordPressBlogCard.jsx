import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import BlogButton from "../interactives/BlogButton";

export default function WordPressBlogCard({
  img,
  title,
  subtitle,
  link,
  colorMode,
}) {
  let colorText, colorBg, colorTextOpacity;

  switch (colorMode) {
    case "light":
      colorBg = "bg-terciary";
      colorText = "text-corTitulosPreto";
      colorTextOpacity = "text-corOutrosTextosPreto";
      break;
    case "dark":
      colorBg = "bg-darkOpacity";
      colorText = "text-corTitulosBranca";
      colorTextOpacity = "text-corOutrosTextosBranca";

      break;
    case "defaultDark":
      colorBg = "bg-terciary";
      colorText = "text-corTitulosPreto";
      colorTextOpacity = "text-corOutrosTextosPreto";
      break;
      break;

    case "defaultLight":
      colorBg = "bg-terciary";
      colorText = "text-corTitulosPreto";
      colorTextOpacity = "text-corOutrosTextosPreto";
  }
  return (
    <div>
      <MotionDivDownToUp>
        <div
          id="cardBlog"
          className={`w-[290px] phone2:w-[300px] phone3:w-[350px] tablet1:w-[400px] font-mainFont flex flex-col desktop1:max-w-[500px] desktop3:max-w-[375px] rounded-2xl p-[20px] ${colorBg}`}
        >
          <div className="w-full max-h-[220px] tablet1:h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
            <div className="w-full">{img}</div>
          </div>
          <h1
            className={`mt-4 text-title1 leading-[25px] font-bold font-secondFont mb-[12px] ${colorText}`}
            title="blogTitle"
          >
            {title}
          </h1>
          <h2
            className={`text-paragraph3 font-light font-secondFont mb-[32px] leading-[18px] desktop1:leading-[21px] ${colorTextOpacity}`}
            title="blogSubtitle"
          >
            {subtitle}
          </h2>
          <div className="flex ">
            <BlogButton
              label="Ver matéria completa"
              buttonLink={link}
              className={`bg-transparent pl-0 ${colorText}`}
              size="small"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-corner-down-right"
                >
                  <polyline points="15 10 20 15 15 20" />
                  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                </svg>
              }
            />
          </div>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
