import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ logo }) => {
  return (
    <nav className=" flex justify-between items-center">
      <Image src={logo} alt="logo" className="" />
      <ul className=" flex items-center gap-10 fontAntapani text-base font-normal">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Our Capabilities</Link>
        <Link href={"/ourwork"}>Our Work</Link>
        <Link href={"/"}>Blog</Link>
        <Link
          href={"/contactus"}
          className=" bg-[#191922] text-white rounded-[20px] pt-2 pb-3 px-6 "
        >
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
