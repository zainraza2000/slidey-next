"use client";
import React from "react";
import ProvenSlider from "./ProvenSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProvenSection = () => {
  return (
    <section className=" w-4/5 flex flex-col justify-between items-center md:gap-5 xl:gap-8 mx-auto mb-28">
      <h3 className="fontGivonic text-[52px] font-semibold w-full px-8">
        The
        <span className=" pt-2 px-[10px] pb-0 bg-[#E1FC71] text-black rounded-lg mx-3">
          Proven{" "}
        </span>{" "}
        Impact
      </h3>
      <ProvenSlider />
    </section>
  );
};

export default ProvenSection;
