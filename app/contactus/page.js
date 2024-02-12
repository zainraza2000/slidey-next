import Navbar from "@/components/shared/Navbar";
import React from "react";
import slideyLogo from "@/assets/images/logo-black.png";
import contactTabletImg from "@/assets/images/contactus/contactus-img.png";
import ClientSection from "@/components/client/ClientSection";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Counting from "@/components/ContactUsPage/Counting";
import Layout from "@/components/shared/Layout";

const page = () => {
  return (
    <Layout>
      <div className="w-[80%] flex justify-between gap-10 pb-16 pt-28 bgContactUs mx-auto">
        <div className=" w-[60%] flex flex-col gap-10 ">
          <h3 className="fontGivonic text-[52px] font-semibold leading-[60px] capitalize">
            Claim Your{" "}
            <span className=" pt-2 px-[10px] pb-0 bg-[#86E2FF] rounded-lg">
              Free
            </span>
            <br /> Slide
          </h3>
          <p className=" w-[65%] fontGivonic text-xl font-medium">
            Get A Free Sample Slide Within 24 Hrs and Witness the Subtle Art Of
            Presenting!
          </p>
          <Image src={contactTabletImg} alt="contactTabletImg" className="" />
        </div>
        <form className="w-[40%] flex flex-col justify-start items-end gap-7">
          <div className=" flex flex-col gap-3 w-full">
            <label
              htmlFor="firstName"
              className="fontGivonic text-xl font-semibold tracking-[1.5px]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className=" contactInputShadow text-lg font-medium tracking-[1.5px] bg-white py-4 px-4 rounded-lg focus:outline-none"
            />
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <label
              htmlFor="lastname"
              className="fontGivonic text-xl font-semibold tracking-[1.5px]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className=" contactInputShadow text-lg font-medium tracking-[1.5px] bg-white py-4 px-4 rounded-lg focus:outline-none"
            />
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <label
              htmlFor="email"
              className="fontGivonic text-xl font-semibold tracking-[1.5px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className=" contactInputShadow text-lg font-medium tracking-[1.5px] bg-white py-4 px-4 rounded-lg focus:outline-none"
            />
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <label
              htmlFor="country"
              className="fontGivonic text-xl font-semibold tracking-[1.5px]"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className=" contactInputShadow text-lg font-medium tracking-[1.5px] bg-white py-4 px-4 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-8 w-full mt-4">
            <p className="fontGivonic text-xl font-medium capitalize">
              get An instant quote from our customer support or submit the form
              for more details!
            </p>
            <button className=" contactInputShadow text-xl font-medium tracking-[1.5px] bg-[#86E2FF] py-[14px] px-4 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ClientSection />
      <Counting />
    </Layout>
  );
};

export default page;
