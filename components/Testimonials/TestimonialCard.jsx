import Image from "next/image";
import React from "react";

import arrow from "@/assets/images/testinomials/testinomial-arrow.svg";
import lineUp from "@/assets/images/testinomials/line-up.png";
import lineDown from "@/assets/images/testinomials/line-down.png";

const TestimonialCard = ({ item, isBlur }) => {
  return (
    <div
      key={item.id}
      className={`w-[486px] flex flex-col justify-between gap-8 bg-[#fff] testinomial-boxShadow rounded-3xl px-10 pt-12 pb-8 ${
        isBlur && "blur-sm"
      }
      transition-all duration-500 ease-in-out
      `}
    >
      <Image
        src={lineUp}
        alt="lineUp"
        width={100}
        height={100}
        className=" w-full"
      />
      <div className=" flex gap-5 items-center">
        <Image
          src={item.profileImg}
          alt="clientProfile1s"
          width={126}
          height={126}
          className=" "
        />
        <div className=" flex flex-col justify-center gap-2">
          <h3 className=" fontGivonic text-3xl font-semibold">
            {item.firstname} <br /> {item.lastname}
          </h3>
          <p className="  fontGivonic text-lg text-[#4C4C4C] font-semibold">
            {item.designation}
          </p>
        </div>
      </div>
      <p className="fontGivonic text-[22px] font-semibold">{item.message}</p>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <p className=" text-[#4D4D4D]">Read More</p>
          <Image src={arrow} width={10} height={10} className="" />
        </div>
        <Image
          src={item.companyLogo}
          alt="client1Company"
          width={70}
          height={60}
          className={`${
            item.id === 2 || item.id === 4 ? " w-[120px]" : " w-[70px]"
          }`}
        />
      </div>
      <Image src={lineDown} alt="lineDown" />
    </div>
  );
};

export default TestimonialCard;
