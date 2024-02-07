import React from "react";
import price1 from "@/assets/images/pricing/price-1.png";
import price2 from "@/assets/images/pricing/price-2.png";
import price3 from "@/assets/images/pricing/price-3.png";
import Image from "next/image";

const PricingSection = () => {
  return (
    <section className=" bg-pricing w-4/5 flex flex-col justify-between md:gap-5 xl:gap-8 mx-auto py-28">
      <h3 className="fontGivonic text-[52px] font-semibold capitalize w-fit">
        pricing
        <span className=" pt-2 px-[10px] pb-0 bg-[#E1FC71] text-black capitalize rounded-lg mx-3">
          plans
        </span>
      </h3>
      <div className=" w-full flex items-end gap-4 -mt-10">
        <div className=" bg-white flex-1 rounded-[40px] h-[770px] flex flex-col justify-between px-3 pt-3 pb-14">
          <Image
            src={price1}
            alt="price1"
            className=" w-full 2xl:h-64 md:h-fit"
          />
          <div className=" flex flex-col w-[80%] justify-center items-center gap-4 mx-auto">
            <p className=" w-full text-center text-3xl font-semibold">
              Timeline
            </p>
            <button className=" w-full bg-[#ECECEC] text-2xl font-medium rounded-[15px] py-3 capitalize transition-all duration-300 ease-in-out transform-gpu hover:bg-[#E1FC71] hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
        <div className=" bg-white flex-1 rounded-[40px] h-[858px] flex flex-col justify-between px-3 pt-3 pb-14">
          <Image
            src={price2}
            alt="price2"
            className=" w-full 2xl:h-64 md:h-fit"
          />
          <div className=" flex flex-col w-[80%] justify-center items-center gap-4 mx-auto">
            <p className=" w-full text-center text-3xl font-semibold">
              Timeline
            </p>
            <button className=" w-full bg-[#ECECEC] text-2xl font-medium rounded-[15px] py-3 capitalize transition-all duration-300 ease-in-out transform-gpu hover:bg-[#E1FC71] hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
        <div className=" bg-white flex-1 rounded-[40px] h-[770px] flex flex-col justify-between px-3 pt-3 pb-14">
          <Image
            src={price3}
            alt="price3"
            className=" w-full 2xl:h-64 md:h-fit "
          />
          <div className=" flex flex-col w-[80%] justify-center items-center gap-4 mx-auto">
            <p className=" w-full text-center text-3xl font-semibold">
              Timeline
            </p>
            <button className=" w-full bg-[#ECECEC] text-2xl font-medium rounded-[15px] py-3 capitalize transition-all duration-300 ease-in-out transform-gpu hover:bg-[#E1FC71] hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
