import Image from "next/image";
import React from "react";
import footerImg from '@/assets/images/footer-img.png'

const Footer = () => {
  return (
    <section className=" bg-[#0F0F16] mt-20">
      <div className="w-4/5 flex flex-col justify-center items-center gap-16 mx-auto py-24">
        <div className=" grid grid-cols-4 gap-4">

        </div>
        <Image src={footerImg} alt="footerImg" />
      </div>
    </section>
  );
};

export default Footer;
