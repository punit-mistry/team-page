import React from "react";
import { Data } from "../Data";
import img1 from "../assets/6.jpg";
import img2 from "../assets/2.jpg";
const SecondSection = () => {
  return (
    <div className="h-full flex p-10 flex-col gap-10">
      <div className="text-4xl text-center font-bold uppercase">
        Learn from Scientists Research Scholors from top institutes in the
        worlds{" "}
      </div>
      <div className="flex flex-wrap gap-16">
        {Data.map((res) => {
          return (
            <div
              className="bg-gray-300 w-48 h-52 rounded-lg p-5 text-center flex justify-center items-center hover:bg-red-600 hover:font-bold transition-all hover:scale-110 delay-75 shadow-2xl cursor-pointer hover-effect"
              style={{}}
            >
              <span>{res.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        <div className="flex flex-wrap gap-16 flex-col h-[110vh] bg-black text-white p-10 ">
          <div className="text-7xl text-center font-bold uppercase h-24">
            Meet our Mentor
          </div>
          <div className="flex flex-wrap gap-20 p-10 justify-center">
            {Data.map((res) => {
              return (
                <div className="text-center gap-5 flex flex-col justify-center items-center p-10 bg-yellow-700 text-white cursor-pointer hover:scale-110 hover:border-white hover:border-4 transition-all">
                  <img
                    className="hover:scale-110 transition-all rounded-full"
                    src={img1}
                    width={150}
                    height={150}
                  />
                  <span className="font-bold">{res.mentor}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-7xl text-center font-bold uppercase h-24">
        Mentor & Advisor
      </div>
      <div className="flex flex-wrap gap-16 justify-center items-center">
        {Data.map((res) => {
          return (
            <div className="text-center gap-5 flex flex-col justify-center items-center">
              <img
                className="hover:scale-110 transition-all rounded-full"
                src={img2}
                width={200}
                height={150}
              />
              <span className="font-bold">{res.mentor}</span>
              {res.location}
              <button className="bg-black text-white w-32 h-10 p-1 rounded-lg font-bold">
                {" "}
                Message Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondSection;
