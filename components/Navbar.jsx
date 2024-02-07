import React from 'react'
import logo from "../assets/images/logo.png";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center">
    <Image src={logo} alt="logo" className="" />
    <ul className=" flex items-center gap-10 fontAntapani text-base font-normal">
      <li>Home</li>
      <li>Our Capabilities</li>
      <li>Our Work</li>
      <li>Blog</li>
      <button className=" bg-[#191922] rounded-[20px] py-2 px-6 ">
        Contact Us
      </button>
    </ul>
  </nav>
  )
}

export default Navbar