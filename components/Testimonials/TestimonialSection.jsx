"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import clientProfile1 from "@/assets/images/testinomials/client-1.png";
import client1Company from "@/assets/images/testinomials/client-1-company.png";
import clientProfile2 from "@/assets/images/testinomials/client-2.png";
import client2Company from "@/assets/images/testinomials/client-2-company.png";
import arrow from "@/assets/images/testinomials/testinomial-arrow.svg";
import nextArrow from "@/assets/images/testinomials/testinomial-arrow.png";
import lineUp from "@/assets/images/testinomials/line-up.png";
import lineDown from "@/assets/images/testinomials/line-down.png";
import TestimonialCard from "./TestimonialCard";

const clientData = [
  {
    id: 1,
    firstname: "Hamid",
    lastname: "Kabdovand",
    designation: "CEO, BallersApp",
    profileImg: clientProfile1,
    companyLogo: client1Company,
    message:
      "“Importance of making a great first impression and can accommodate any of your Presentation...",
  },
  {
    id: 2,
    firstname: "Ilan ",
    lastname: "Danielli",
    designation: "CEO, BallersApp",
    profileImg: clientProfile2,
    companyLogo: client2Company,
    message:
      "“I have worked with several agencies in the past, PR firms and what not -at the same time I have worked with Slidey and…”",
  },
  {
    id: 3,
    firstname: "daniyal",
    lastname: "Kabdovand",
    designation: "CEO, BallersApp",
    profileImg: clientProfile1,
    companyLogo: client1Company,
    message:
      "“Importance of making a great first impression and can accommodate any of your Presentation...",
  },
  {
    id: 4,
    firstname: "zain ",
    lastname: "Danielli",
    designation: "CEO, BallersApp",
    profileImg: clientProfile2,
    companyLogo: client2Company,
    message:
      "“I have worked with several agencies in the past, PR firms and what not -at the same time I have worked with Slidey and…”",
  },
];

const TestimonialSection = () => {
  const [substate, setSubstate] = useState([0, 1, 2]);
  const [transitioning, setTransitioning] = useState(false);
  const [newSub, setNewSub] = useState(3);
  const handleSlider = () => {
    setTransitioning(true);
    setNewSub(substate[2] < clientData.length - 1 ? substate[2] + 1 : 0);
    setTimeout(() => {
      const updatedSubstate = substate.map((sub) =>
        sub < clientData.length - 1 ? sub + 1 : 0
      );
      setSubstate(updatedSubstate);
      setTransitioning(false);
    }, 300); // Change the timing according to your transition duration
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitioning(false);
    };
    window.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      window.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <section className=" relative bg-testinomial w-4/5 flex flex-col justify-between items-center md:gap-5 xl:gap-8 mx-auto py-28">
      <h3 className="fontGivonic text-[52px] font-semibold w-full">
        Client
        <span className=" pt-2 px-[10px] pb-0 bg-[#86e2ff] text-black rounded-lg mx-3">
          Testimonials{" "}
        </span>
      </h3>
      {/* Cards */}
      <div className=" flex gap-6">
        {/* Card */}
        {substate.map((sub, i) => (
          <TestimonialCard
            key={i}
            item={clientData[sub]}
            isBlur={i == 2}
            style={{
              transform: `translateX(${
                transitioning && i === 0
                  ? "-200%"
                  : transitioning && i >= 1
                  ? "-100%"
                  : "0"
              })`,
              transition: "transform 0.4s ease",
            }}
          />
        ))}
      </div>
      <button
        className=" absolute bottom-[38%] right-48"
        onClick={handleSlider}
        disabled={transitioning}
      >
        <Image src={nextArrow} alt="nextArrow" />
      </button>
    </section>
  );
};

export default TestimonialSection;
