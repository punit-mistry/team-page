import React from "react";
import SecondSection from "./SecondSection";
import Plx from "react-plx";
import img2 from "../assets/2.svg";
const parallaxData = [
  {
    start: 0,
    end: 800,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
];
const FirstSection = () => {
  return (
    <>
      <Plx
        parallaxData={parallaxData}
        style={{
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        <div className="h-full p-10 bg-yellow-500 flex flex-col gap-10">
          <marquee
            className="font-['Vanguard CF'] text-[10vw] font-bold uppercase w-full tracking-tighter "
            scrollamount="50"
          >
            Welcome To the Research Foundation
          </marquee>
          <div className="flex justify-center items-center">
            <img src={img2} />
          </div>
        </div>
      </Plx>
      <div>
        <SecondSection />
      </div>
    </>
  );
};

export default FirstSection;
