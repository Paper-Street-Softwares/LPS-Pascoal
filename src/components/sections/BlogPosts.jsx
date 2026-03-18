import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

function BlogPosts({ colorMode }) {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  let backgroundMode, titleColor, subtitleColor, linkColor;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryDark";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosBranca";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryLight";
      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryDark";
      break;
    case "defaultLight":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-corTitulosBranca";
  }

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${content.texts.blog.blogLink}/posts/`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts || []))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1441) {
        setVisibleCount(6);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div>
      <SectionArea className={backgroundMode} id="blog">
        <SectionWrapper>
          <SectionHeaderNovo
            className="text-center"
            miniTitle={content.texts.blog.miniTag}
            title={content.texts.blog.title}
            subtitle={content.texts.blog.subtitle}
            colorMode={colorMode}
          />

          <ul className="flex flex-wrap gap-[30px] justify-center">
            {posts.slice(0, visibleCount).map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  colorMode={colorMode}
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h1
                      className={titleColor}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  }
                  subtitle={
                    <p
                      className={subtitleColor}
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt.length > 100
                            ? post.excerpt.substring(0, 60) + "..."
                            : post.excerpt,
                      }}
                    />
                  }
                  link={post.URL}
                />
              </li>
            ))}
          </ul>

          <MotionDivDownToUp>
            <p
              className={`flex justify-center mx-auto mt-12 scale-100 hover:scale-90 duration-500 w-fit transition-all cursor-pointer ${linkColor} `}
            >
              <a
                href={`https://${content.texts.blog.blogLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.texts.blog.label}
              </a>
            </p>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default BlogPosts;
