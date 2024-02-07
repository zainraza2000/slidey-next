import Image from "next/image";
import React from "react";
import storyline1 from "@/assets/images/storyline-1.png";
import storyline2 from "@/assets/images/storyline-2.png";
import storyline3 from "@/assets/images/storyline-3.png";

const StorylineSection = () => {
  return (
    <section className=" bg-storyline w-4/5 flex flex-col justify-between items-center gap-4 mx-auto py-28">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className=" flex flex-col gap-10 justify-between">
          <h3 className="fontGivonic text-[52px] font-semibold leading-[60px]">
            Visual{" "}
            <span className=" pt-2 px-[10px] pb-0 bg-[#E1FC71] rounded-lg">
              Storytelling
            </span>
            <br /> Redefined
          </h3>
          <div className="flex xl:gap-6 md:gap-3 bg-white rounded-[30px] 2xl:p-8 md:p-6">
            <div className=" flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2">
              <h3 className="fontGivonic xl:text-[28px] md:text-[20px]  font-semibold">
                Presentation Design
              </h3>
              <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[#4D4D4D]">
                Whether it's a corporate meeting or a keynote address, our
                presentation designs are engineered to engage. We combine
                aesthetic elegance with clarity, ensuring your message not only
                reaches but also resonates with your audience.
              </p>
            </div>
            <Image
              src={storyline1}
              alt=""
              className=" rounded-[20px] xl:w-full md:w-[160px] xl:h-full md:h-[170px]"
            />
          </div>
        </div>
        <div className="  flex flex-col 2xl:gap-6 md:gap-4 bg-white rounded-[30px] p-8">
          <Image
            src={storyline2}
            alt=""
            className=" rounded-[20px] w-full xl:h-[243px] md:h-[220px]"
          />
          <h3 className="fontGivonic xl:text-[28px] md:text-[20px]  font-semibold">
            Pitch Deck Design
          </h3>
          <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[#4D4D4D]">
            Transform your big ideas into compelling pitch decks. Our expertly
            crafted designs are tailored to captivate investors, weaving your
            vision into a persuasive narrative that resonates and convinces.
          </p>
        </div>
      </div>
      {/* BOTTOM */}
      <div class="grid 2xl:grid-cols-6 md:grid-cols-4 gap-4 w-full h-[310px]">
        <div className="2xl:col-span-2 flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2 bg-white rounded-[30px] 2xl:p-8 md:p-6">
          <h3 className="fontGivonic xl:text-[28px] md:text-[20px]  font-semibold">
            Branding Design
          </h3>
          <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[#4D4D4D]">
            Whether it's a corporate meeting or a keynote address, our
            presentation designs are engineered to engage. We combine aesthetic
            elegance with clarity, ensuring your message not only reaches but
            also resonates with your audience.
          </p>
        </div>
        <Image
          src={storyline3}
          alt=""
          className=" rounded-[20px] h-[310px] w-full"
        />
        <div className="2xl:col-span-3 md:col-span-2 flex xl:gap-6 md:gap-3 bg-white rounded-[30px] 2xl:p-8 md:p-6">
          <div className=" flex flex-col 2xl:gap-6 xl:gap-4 md:gap-2">
            <h3 className="fontGivonic xl:text-[28px] md:text-[20px]  font-semibold">
              Website Design
            </h3>
            <p className="fontGivonic 2xl:text-base xl:text-[15px] md:text-[12px] text-[#4D4D4D]">
              Whether it's a corporate meeting or a keynote address, our
              presentation designs are engineered to engage. We combine
              aesthetic elegance with clarity, ensuring your message not only
              reaches but also resonates with your audience.
            </p>
          </div>
          <Image
            src={storyline1}
            alt=""
            className=" rounded-[20px]  xl:w-full md:w-[160px] xl:h-full md:h-[170px]"
          />
        </div>
      </div>
    </section>
  );
};

export default StorylineSection;
