"use client";
import React, { useState } from "react";
import mainBg from "../assets/images/Vector.png";
import exploreImg from "../assets/images/explore-img.png";
import bdDownImg from "../assets/images/bg-down-4.png";
import Navbar from "./shared/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import heroSectionCardImg1 from "@/assets/images/herosection/herosection-card-1.png";
import heroSectionCardImg2 from "@/assets/images/herosection/herosection-card-2.png";
import heroSectionCardImg3 from "@/assets/images/herosection/herosection-card-3.png";
import slideyLogo from '@/assets/images/logo-white.png' 
import ImageSecion from "./ImageHerosection";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const cardsVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const HeroSection = () => {
  const [currentCards, setCurrentCards] = useState(1);

  return (
    <>
      <div className="relative flex justify-center h-screen w-full xl:pt-11 md:pt-6 xl:px-20 md:px-8">
        <Image
          src={mainBg}
          alt="main bg"
          className=" absolute h-full 2xl:w-[90%]  md:w-[93%] mx-auto "
        />
        {/* <div  > */}
        <Image
          src={exploreImg}
          className=" spinning-div absolute -bottom-12 z-[2000000]"
          alt="explore Img"
          onClick={() => setCurrentCards((prev) => (prev === 1 ? 2 : 1))}
        />
        {/* </div> */}
        <div className=" text-white z-50 w-5/6 pt-8">
          <Navbar logo={slideyLogo} />
          <div className=" fontGivonic flex justify-between mt-20">
            <h1 className=" w-[40%] text-6xl font-semibold tracking-wider leading-tight">
              Designing Decks, Pitch Perfectly!
            </h1>
            <div className=" w-[25%] flex flex-col gap-3">
              <p className=" text-xl font-normal text-[#959595] tracking-wider text-justify">
                Transforming Presentations into Powerful Narratives!
              </p>
              <button className=" text-[22px] font-semibold text-[#090909] bg-[#86e2ff] rounded-[50px] py-3 px-6 tracking-wider
              transition-all duration-300 ease-in-out transform-gpu hover:scale-105">
                Claim Your Free Slide
              </button>
            </div>
          </div>
          <div className=" flex justify-between mt-20">
            <div className=" flex flex-col gap-3">
              <h3 className=" fontAntapani text-5xl font-semibold">5K+</h3>
              <p className=" fontGivonic text-[#959595]">
                Aesthetic Wonders Created
              </p>
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" fontAntapani text-5xl font-semibold">$70M</h3>
              <p className=" fontGivonic text-[#959595] text-end tracking-[10px] -mr-2">
                RAISED
              </p>
            </div>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className=" relative flex justify-center  w-[860px] mx-auto transition-transform transform"
          >
            {currentCards === 1 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-[120px] hover:top-[110px] left-20 hover:left-16 bg-lime-700 w-[270px] h-[390px] rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg1} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-12 hover:top-[38px] bg-orange-400 w-[310px] h-[470px] hover:w-[320px] hover:h-[480px] rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                >
                  <ImageSecion imgSrc={heroSectionCardImg2} />
                </motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-[120px] hover:top-[105px] right-12 hover:right-10 bg-stone-600 w-[280px] h-[420px]  hover:h-[435px]  rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                >
                  <ImageSecion imgSrc={heroSectionCardImg3} />
                </motion.li>
              </>
            )}
            {currentCards === 2 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-[120px] hover:top-[140px] left-20 hover:left-16 bg-lime-700 w-[270px] h-[390px] rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-12 hover:top-6 bg-orange-400 w-[310px] h-[470px] hover:w-[320px] hover:h-[480px] rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-[120px] hover:top-[105px] right-12 hover:right-10 bg-stone-600 w-[280px] h-[420px]  hover:h-[435px]  rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                ></motion.li>
              </>
            )}
          </motion.ul>
        </div>
      </div>
      <Image
        src={bdDownImg}
        className=" relative w-full z-[2000] -mt-[118px] px-[94px]"
        alt="bdDownImg"
      />
    </>
  );
};

export default HeroSection;
