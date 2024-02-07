"use client";
import React, { useState } from "react";
import mainBg from "../assets/images/Vector.png";
import exploreImg from "../assets/images/explore-img.png";
import bdDownImg from "../assets/images/bg-down-4.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

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
          className=" spinning-div absolute -bottom-5 z-[2000000]"
          alt="explore Img"
          onClick={() => setCurrentCards((prev) => (prev === 1 ? 2 : 1))}
        />
        {/* </div> */}
        <div className=" text-white z-50 w-5/6 pt-8">
          <Navbar />
          <div className=" fontGivonic flex justify-between mt-20">
            <h1 className=" w-[40%] text-6xl font-semibold tracking-wider leading-tight">
              Designing Decks, Pitch Perfectly!
            </h1>
            <div className=" w-[25%] flex flex-col gap-3">
              <p className=" text-xl font-normal text-[#959595] tracking-wider text-justify">
                Transforming Presentations into Powerful Narratives!
              </p>
              <button className=" text-[22px] font-normal text-[#090909] bg-[#E1FC71] rounded-[50px] py-4 px-8 tracking-wider">
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
                  className="absolute top-12 hover:top-8 left-20 hover:left-16 bg-lime-700 w-[280px] h-[450px] hover:w-[300px] hover:h-[470px] rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-9 hover:top-6 bg-orange-400 w-[310px] h-[545px] hover:w-[320px] hover:h-[565px]  -mt-16 rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-9 hover:top-6 right-12 hover:right-10 bg-stone-600 w-[280px] h-[520px]  hover:w-[300px] hover:h-[540px]  rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "10deg" }}
                ></motion.li>
              </>
            )}
            {currentCards === 2 && (
              <>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-12 hover:top-8 left-20 hover:left-16 bg-lime-700 w-[280px] h-[450px] hover:w-[300px] hover:h-[470px] rounded-[30px] -z-10 -rotate-12 transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                  style={{ rotate: "-12deg" }}
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-9 hover:top-6 bg-orange-400 w-[310px] h-[545px] hover:w-[320px] hover:h-[565px]  -mt-16 rounded-[30px] transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
                ></motion.li>
                <motion.li
                  variants={cardsVariants}
                  className="absolute top-9 hover:top-6 right-12 hover:right-10 bg-stone-600 w-[280px] h-[520px]  hover:w-[300px] hover:h-[540px]  rounded-[30px]  transition-all duration-300 ease-in-out transform-gpu hover:scale-110 cursor-pointer"
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
