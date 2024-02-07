import Image from "next/image";
import React from "react";
import footerImg from "@/assets/images/footer-img.png";
import { RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import { BiBasketball } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-[#0F0F16] mt-20">
      <div className="w-4/5 flex flex-col justify-center items-center gap-16 mx-auto py-24">
        <div className=" grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-8">
            <p className=" text-[40px] font-semibold text-[#fff] tracking-wider mb-0">
              Create Your Story With Us!
            </p>
            <button className=" text-[22px] font-semibold text-[#090909] bg-[#86E2FF] rounded-[15px] py-3 px-6 tracking-wider">
              Claim Your Free Slide
            </button>
            <h3 className=" text-lg text-[#fff] mb-0">Find Us On</h3>
            <div className=" flex items-center gap-5">
              <Link
                href={"#"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3"
              >
                <RiInstagramLine className=" text-[26px]" />
              </Link>
              <Link
                href={"#"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3"
              >
                <FaPinterestP className=" text-[26px]" />
              </Link>
              <Link
                href={"#"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3"
              >
                <RiLinkedinFill className=" text-[26px]" />
              </Link>
              <Link
                href={"#"}
                className=" bg-[#86E2FF] rounded-[50%] py-[10px] px-3"
              >
                <BiBasketball className=" text-[26px]" />
              </Link>
            </div>
          </div>
          <div className=" flex col-span-2">
            <div className=" flex-1 flex flex-col gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">Home</h3>
              <p className=" text-sm text-[#9F9F9F]">Services</p>
              <p className=" text-sm text-[#9F9F9F]">Our Vison</p>
              <p className=" text-sm text-[#9F9F9F]">Privicy Policy</p>
            </div>
            <div className=" flex-1 flex flex-col gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">Find Jobs</h3>
              <p className=" text-sm text-[#9F9F9F]">Careers</p>
            </div>
            <div className=" flex-1 flex flex-col justify-start gap-6 capitalize">
              <h3 className=" text-lg text-[#fff] mb-0">About Slidey</h3>
              <div className=" flex justify-start items-center gap-2">
                <TbMail className=" text-[28px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">info@slideyllc.com</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <HiOutlinePhone className=" text-[28px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">+1(786)785-2112</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <SlLocationPin className=" text-[36px] text-[#9F9F9F]" />
                <p className=" text-sm text-[#9F9F9F]">
                  1036 US Highway 1 #324 North Palm Beach, FL 33408
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={footerImg} alt="footerImg" className="h-[300px]" />
      </div>
    </section>
  );
};

export default Footer;
