import React from "react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import { motion } from "framer-motion";
import { Award, Star, Trophy, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../cards/CardsAuthorityAndAlert";

function AuthorityAndAlert() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardsData = [
    { title: "TRT Sergipe", position: "6ª colocada", delay: 0 },
    { title: "TRT Rio Grande do Norte", position: "10ª colocada", delay: 0.1 },
    { title: "TRT Distrito Federal", position: "22ª colocada", delay: 0.2 },
  ];

  const fullList = [
    { position: "1ª colocada", exam: "TRT Campinas" },
    { position: "6ª colocada", exam: "TRT Sergipe" },
    { position: "10ª colocada", exam: "TRT Rio Grande do Norte" },
    { position: "22ª colocada", exam: "TRT Distrito Federal" },
    { position: "35ª colocada", exam: "TRT Pernambuco" },
    { position: "60ª colocada", exam: "TRT Maranhão" },
    { position: "94ª colocada", exam: "TRT Santa Catarina" },
    { position: "202ª colocada", exam: "TRT Paraíba" },
  ];

  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.authorityAlert.miniTag}
          title={content.texts.authorityAlert.title}
          subtitle={content.texts.authorityAlert.subtitle}
        />

        <div className="min-h-screen relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 -skew-y-6 transform origin-top-left -z-10" />
          <div className="absolute top-40 right-0 w-96 h-96 bg-primaryLight/5 rounded-full -z-10" />

          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Highlight Banner */}
            <motion.div
              variants={itemVariants}
              className="mb-10 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primaryDark to-primaryDark rounded-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-primaryDark border-t border-b border-primaryLight/30 sm:border rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <div className="px-6 py-10 sm:px-12 sm:py-14 text-center relative z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primaryLight/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-primaryLight/30">
                    <Trophy className="w-8 h-8 text-primaryLight" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-mainFont">
                    1º Lugar – TRT Campinas
                  </h3>
                  <p className="text-xl text-primaryLight/90 font-medium tracking-wide text-corOutrosTextosBranca">
                    Oficial de Justiça Avaliador Federal
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top 3 Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 desktop1:grid-cols-3 gap-6 mb-16 font-secondFont"
            >
              {cardsData.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="h-full border-border/60 bg-white/50 hover:border-primaryLight/30 transition-all duration-300 overflow-hidden relative md:w-[350px] desktop1:w-[300px]">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award className="w-24 h-24 text-primaryDark opacity-50" />
                    </div>
                    <CardHeader className="pb-2 relative z-10">
                      <CardTitle className="text-lg desktop1:text-[15px] font-bold text-primaryDark font-secondFont">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primaryLight fill-primaryLight" />
                        <span className="text-2xl desktop1:text-xl font-bold text-primaryDark">
                          {card.position}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Detailed List Section */}
            <motion.div
              variants={itemVariants}
              className=" border-t border-border/60"
            >
              <div className="text-center mb-10">
                <p className="text-muted-foreground">
                  Entre 2022 e 2025, minhas aprovações incluem:
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border/50 p-6 md:p-10 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {fullList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primaryDark/10 group-hover:scale-110 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primaryDark group-hover:text-primaryDark transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-primaryDark group-hover:text-primaryDark transition-colors">
                          {item.position}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item.exam}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default AuthorityAndAlert;
